import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountrySearch = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://country-facts.p.rapidapi.com/region/america', {
        headers: {
          'x-rapidapi-host': 'country-facts.p.rapidapi.com',
          'x-rapidapi-key': '2f52f36206msh6c98a3d8f128180p1ade89jsnb03cb5400cdb',
        },
      });
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const countryData = countries.find((country) => country.cca3 === countryCode);
    setSelectedCountry(countryCode);
    onCountrySelect(countryData);
  };

  return (
    <div className="country-search">
      <label htmlFor="country-select" className="form-label">Select a country:</label>
      <select
        id="country-select"
        className="form-select mb-3"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Choose a country</option>
        {countries.map((country) => (
          <option key={country.cca3} value={country.cca3}>
            {country.name.common}
          </option>
        ))}
      </select>
     
    </div>
    
  );
};

export default CountrySearch;
