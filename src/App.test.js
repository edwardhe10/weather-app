import React from "react";
import renderer from "react-test-renderer";
import Search from "./components/searchbar/searchbar";
import Weather from "./components/weather-curr/weather-curr";
import Forecast from "./components/forecast/forecast";
import { weather, forecast, OnSearchChange } from "./App.js";

it("should test a fetch that returns a promise", () => {
  const info = "blabla";
  return Promise.resolve(info).then((data) => {
    expect(data).toBe(info);
  });
});

it("should test a Promise.all() that takes in two promises", () => {
  return Promise.all([
    Promise.resolve(["temp", "wind"]),
    Promise.resolve(["snow", "rain"]),
  ]).then((data) => {
    expect(data).toEqual([
      ["temp", "wind"],
      ["snow", "rain"],
    ]);
  });
});

it("should test functionality of split() for a string containing latitude and longitude", () => {
  const givenString = "45.12 -12.55";
  return expect(givenString.split(" ")).toEqual(["45.12", "-12.55"]);
});

it("should test if whether App works with the correct return display", () => {
  const tree = renderer.create(
    <div className="box">
      <Search onSearchChange={OnSearchChange} />
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
  expect(tree).toMatchSnapshot();
});
