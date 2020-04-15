import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { RequestWeatherFiveDay } from "./Request";
import CardWeather from "./CardWeather";
import ButtonCity from "./ButtonCity";

import { Button, Table } from "react-bootstrap";

function FiveDay(props) {
  let toDate = new Date(Date.now());
  let num = toDate.getDate();

  const [state, setState] = useState([]);
  const [date, setDate] = useState(num);

  useEffect(() => {
    props.getWeatherFive(props.city);
    let array = [];
    for (let i = 0; i < 6; i++) {
      array[i] = num + i;
    }
    setState(array);
  }, [props.city]);

  function apply(date) {
    setDate(date);
  }

  return (
    <div>
      {!props.loading && props.error === null && (
        <div>
          <br />
          <h1>Weather in {props.city} for a week</h1>
          <div> </div>
          <br />
          {state.map((date, i) => (
            <ButtonCity onChanged={apply} value={date} key={i} />
          ))}
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>{date} Apr</th>
                <th>Temperature</th>
                <th>Feels like</th>
                <th>Atmospheric pressure</th>
                <th>Humidity</th>
                <th>Wind speed</th>
              </tr>
            </thead>
            <tbody>
              {props.weather.list.map((value) => {
                let newDate = new Date(value.dt_txt);
                if (newDate.getDate() === date) {
                  return <CardWeather value={value} key={value.dt} />;
                }
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ getWeatherFive }) => {
  return {
    weather: getWeatherFive.data,
    loading: getWeatherFive.loading,
    error: getWeatherFive.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherFive: (city) => {
      RequestWeatherFiveDay(dispatch, city);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiveDay);
