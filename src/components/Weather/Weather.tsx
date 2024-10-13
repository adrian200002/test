import { useState } from "react";
import "./Weather.scss";

const Weather = () => {
  const weathers: string[] = [
    "Foggy Weather",
    "Sunny Day",
    "Normal Day",
    "Rainy Day",
    "Snowy Weather",
  ];
  const [weatherType, setWeatherType] = useState<string>("Normal Day");

  const handleWeatherChangeLeft = () => {
    const currIndex = weathers.indexOf(weatherType);

    if (currIndex > 0) {
      setWeatherType(weathers[currIndex - 1]);
    }
  };

  const handleWeatherChangeRight = () => {
    const currIndex = weathers.indexOf(weatherType);

    if (currIndex < 4) {
      setWeatherType(weathers[currIndex + 1]);
    }
  };

  return (
    <div className="weather">
      <div className="weather__title">
        <img src="/icons/weather.svg" alt="" />
        <h1>Time and weathers configuration</h1>
      </div>
      <div className="container">
        <h2 className="weather__property">Set Time</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-container">
            <input
              name="hours"
              type="number"
              placeholder="0"
              min={0}
              max={24}
            />
            <input
              name="minutes"
              type="number"
              placeholder="0"
              min={0}
              max={59}
            />
            <input
              name="minutes"
              type="number"
              placeholder="0"
              min={0}
              max={59}
            />
            <button className="apply">Apply</button>
          </div>
        </form>
      </div>
      <div className="container">
        <h2 className="weather__property">Weather</h2>
        <div className="weather__picker">
          <div className="picker-container">
            <img
              onClick={handleWeatherChangeLeft}
              src="/icons/arrow-left.svg"
              alt=""
            />
            <span>{weatherType}</span>
            <img
              onClick={handleWeatherChangeRight}
              src="/icons/arrow-right.svg"
              alt=""
            />
          </div>
          <button className="apply">Apply</button>
        </div>
      </div>
      <div className="container">
        <h2 className="weather__property">Freeze time</h2>
        <label className="switch">
          <input name="freeze-time" type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="container">
        <h2 className="weather__property">Freeze weather status</h2>
        <label className="switch">
          <input name="freeze-weather" type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Weather;
