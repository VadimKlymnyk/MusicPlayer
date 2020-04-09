import React from "react";
import { Table } from "react-bootstrap";

function TableWeather({ value }) {
  return (
    <div>
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
    </div>
  );
}

export default TableWeather;
