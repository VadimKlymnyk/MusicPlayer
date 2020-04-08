import React, { useState } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, FormControl, Navbar, Form, Nav } from "react-bootstrap";

function App() {
  const [value, setValue] = useState({});
  const [loadind, setLoadind] = useState(false);
  const [state, setState] = useState({ target: { value: "" } });
  const [message, setMessage] = useState("");

  async function add(city) {
    //console.log(city.target.value);
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.target.value}&appid=c2dcf8ffb5cdc3f8977bfd2ae7ea4738&units=metric`
    );
    let data = await response.json();
    console.log(data);

    if (data.cod === 200) {
      setValue({
        city: data.name,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
      });
      setLoadind(true);
    } else if (data.cod === "404") {
      setMessage(data.message);
      setLoadind(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(state.target.value);
    add(state);
    setState({ term: "" });
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
            value={state.term}
            onChange={(e) => setState({ target: { value: e.target.value } })}
          />
          <Button variant="outline-secondary" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
      <br />
      <Button variant="outline-secondary" onClick={add} value="Kyiv">
        Kyiv
      </Button>{" "}
      <Button variant="outline-secondary" onClick={add} value="London">
        London
      </Button>{" "}
      <Button variant="outline-secondary" onClick={add} value="New York">
        New York
      </Button>{" "}
      <br />
      {loadind ? (
        <>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>{value.city}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temperature</td>
                <td>{value.temp} °C</td>
              </tr>
              <tr>
                <td>Atmospheric pressure</td>
                <td>{value.pressure} hPa</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{value.humidity} %</td>
              </tr>
              <tr>
                <td>Wind speed</td>
                <td>
                  {value.pressure} {value.windSpeed} meter/sec
                </td>
              </tr>
              <tr>
                <td>Wind direction</td>
                <td>{value.windDeg} °</td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : (
        <>
          <br />
          <h1>{message}</h1>
        </>
      )}
    </Container>
  );
}

export default App;
