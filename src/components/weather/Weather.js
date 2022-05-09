import React, { useState, useEffect } from "react";
const url =
  "https://api.weatherapi.com/v1/current.json?key=eb04b93d31e44c51b6c44148212610&q=Vancouver&aqi=no";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((weather) => {
        const { current } = weather;
        setWeather([current]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <span className="text-sm"></span>;
  }

  return (
    <>
      {weather.map((weather, index) => {
        return (
          <span className="text-sm lowercase" key={index}>
            {/* {weather.condition.text}{" "} */}
            <img
              src={weather.condition.icon}
              className="weatherIcon"
              alt={weather.condition.text}
            />
            <span
              id="weather-code"
              className={"code--" + weather.condition.code}
            ></span>
          </span>
        );
      })}
    </>
  );
};

export default Weather;
