import React from "react";

function CardWeather({ value }) {
  return (
    <tr>
      <td>{value.dt_txt.slice(-8, -3)}</td>
      <td>{Math.round(value.main.temp)}°</td>
      <td>{Math.round(value.main.feels_like)}°</td>
      <td>{value.main.pressure}</td>
      <td>{value.main.humidity}</td>
      <td>{Math.round(value.wind.speed)}</td>
    </tr>
  );
}

export default CardWeather;
