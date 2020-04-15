import React from "react";
import { Table } from "react-bootstrap";

function TableWeather({ value }) {
  //console.log(value.name)
  return (
    <div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Weather in {value.name} today</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temperature</td>
            <td>{value.main.temp} °C</td>
          </tr>
          <tr>
            <td>Atmospheric pressure</td>
            <td>{value.main.pressure} hPa</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{value.main.humidity} %</td>
          </tr>
          <tr>
            <td>Wind speed</td>
            <td>{value.wind.speed} meter/sec</td>
          </tr>
          <tr>
            <td>Wind direction</td>
            <td>{value.wind.deg} °</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableWeather;
