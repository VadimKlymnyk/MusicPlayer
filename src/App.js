import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {SearchCity} from "./components/Request";
import ButtonCity from "./components/ButtonCity";
import TableWeather from "./components/TableWeather";
import Loader from "./components/Loading";
import FiveDay from "./components/FiveDay";
import { Container } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormControl, Navbar, Form, Nav } from "react-bootstrap";

function App(props) {
  const [state, setState] = useState("");
  const [city, setCity] = useState("Letava");
  const cityButton = ["Letava", "Kyiv", "London", "New York"];

  useEffect(() => {
    apply("Letava");
  }, []);

  async function apply(city) {
    setCity(city)
    props.chooseCity(city);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state !== "") apply(state);
    setState("");
  };

  return (
    <Container maxWidth="md">
      <Navbar bg="light" variant="light">
        <Navbar.Brand>App Weather</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form onSubmit={handleSubmit} inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Button variant="outline-secondary" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
      <br />
      {cityButton.map((city, i) => (
        <ButtonCity onChanged={apply} value={city} key={i} />
      ))}
      <br />
      {!props.loading && props.error === null && (
        <TableWeather value={props.weather} />
      )}
      {props.error !== null && (
        <>
          <br />
          <h1>City not found</h1>
        </>
      )}
      {props.loading && (
        <>
          <br />
          <Loader />
        </>
      )}

      <FiveDay city={city} />
    </Container>
  );
}

const mapStateToProps = ({ getWeather }) => {
  return {
    weather: getWeather.data,
    loading: getWeather.loading,
    error: getWeather.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseCity: (city) => {
      SearchCity(dispatch, city);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
