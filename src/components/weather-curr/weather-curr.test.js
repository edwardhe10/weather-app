import React from "react";
import Weather from "./weather-curr.js";
import renderer from "react-test-renderer";

it("should test that weather element functions with blank data", () => {
  const data = {};

  const tree = renderer.create(<Weather data={data} />);
  expect(tree).toMatchSnapshot();
});

it("should test that weather element functions with complete data", () => {
  const data = {
    city: "La Massana, AD",
    coord: {
      lon: 1.4833,
      lat: 42.5542,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    base: "stations",
    main: {
      temp: 8.28,
      feels_like: 6.92,
      temp_min: 8.02,
      temp_max: 9.82,
      pressure: 1021,
      humidity: 85,
      sea_level: 1021,
      grnd_level: 851,
    },
    visibility: 10000,
    wind: {
      speed: 2.32,
      deg: 9,
      gust: 3.36,
    },
    clouds: {
      all: 95,
    },
    dt: 1688168293,
    sys: {
      type: 2,
      id: 19636,
      country: "AD",
      sunrise: 1688185199,
      sunset: 1688240124,
    },
    timezone: 7200,
    id: 3040131,
    name: "La Massana",
    cod: 200,
  };

  const tree = renderer.create(<Weather data={data} />);
  expect(tree).toMatchSnapshot();
});

// *
// None of the tests utilizing enzyme-adapter-react-16 (the ones using wrapper functions)
// function in React 18 (which is the latest version & what our application uses) because
// Enzyme does not support React 18. In fact, Enzyme's last commit is from September 2021
// while React 18 was released March 2022. Safe to say, none of Enzyme and its related functionalities
// work on React 18 projects. This also means the majority of testing cases shown in the tdd-ui
// session folder do not work for this application, which is why all attempts at button
// and state management testing fail automatically.
//
// I HAVE COMMENTED OUT ALL THE INVALID TESTS
//
// Given that things are how they are, we had to do most of our testing in other ways than
// through these test cases. We used console.logs throughout to find errors in the API returns
// We then implemented error handling to catch all of these errors. Extensive testing was
// done by our group to make up for the test cases we could not do.
//
// I HAVE ALSO COMMENTED OUT THE CONSOLE.LOGS FOR NEATNESS, FEEL FREE TO UNCOMMENT THEM
// *
