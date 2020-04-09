import React from "react";

async function SearchCity(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2dcf8ffb5cdc3f8977bfd2ae7ea4738&units=metric`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default SearchCity;
