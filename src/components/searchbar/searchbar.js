import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { cityOptions, cityUrl } from "../../API";

// I HAVE ALSO COMMENTED OUT THE CONSOLE.LOGS FOR NEATNESS, FEEL FREE TO UNCOMMENT THEM

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadCities = (inputValue) => {
    return fetch(`${cityUrl}&namePrefix=${inputValue}`, cityOptions)
      .then((response) => response.json())
      .then((response) => {
        //console.log("data:");
        //console.log(response.data);
        if (response.data) {
          return {
            options: response.data.map((city) => {
              //console.log("city:");
              //console.log(city);
              //console.log(city.latitude);
              //console.log(city.longitude);
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        } else {
          return {
            options: [].map((city) => {
              //console.log("city:");
              //console.log(city);
              //console.log(city.latitude);
              //console.log(city.longitude);
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={500}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadCities}
    />
  );
};

export default Search;
