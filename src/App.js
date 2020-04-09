import React, { useState } from "react";
import SearchCity from "./components/Request";
import ButtonCity from "./components/ButtonCity";
import TableWeather from "./components/TableWeather";
import { Container } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormControl, Navbar, Form, Nav } from "react-bootstrap";

function App() {
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const cityButton = ["Letava", "Kyiv", "London", "New York"];

  async function apply(city) {
    let data = await SearchCity(city);
    if (data.cod === 200) {
      setValue({
        city: data.name,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
      });
      setLoading(true);
    } else {
      setMessage(data.message);
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    apply(state);
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
      {loading ? (
        <TableWeather value={value} />
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
