import React from "react";
import renderer from "react-test-renderer";
import Search from "./searchbar.js";
//import { shallow } from "./testSetup.js";
const OnSearchChange = () => {
  return;
};

it("test if component displays correct search bar & drop-down bar elements & settings", () => {
  const t1 = renderer.create(
    <Search
      onSearchChange={OnSearchChange}
      className=" css-1jqq78o-placeholder"
      id="react-select-2-placeholder"
      Search
      for
      City
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      type="text"
      value=""
    />
  );
  expect(t1).toMatchSnapshot();
});

//it("should find a button", () => {
//  const wrapper = shallow(<Search onSearchChange={OnSearchChange} />);
//  expect(wrapper.find(".button-increment").text()).toEqual("Increment");
//});

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

//it("should test input field of type=null", () => {
//  const defaultSearch = null;
//  const wrapper = shallow(<Search search={defaultSearch} />);
//});
