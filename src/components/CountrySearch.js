import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountrySearch = ({ onCountrySelect, onCountrySelect2 }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCountry2, setSelectedCountry2] = useState('');

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
    onCountrySelect(countryData, countryCode);
  };
  
  const handleCountryChange2 = (event) => {
    const countryCode = event.target.value;
    const countryData = countries.find((country) => country.cca3 === countryCode);
    setSelectedCountry2(countryCode);
    onCountrySelect2(countryData, countryCode);
  };
  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="country-select" className="form-label">Country:</label>
        <br/>
        <select
          id="country-select"
          className="form-select"
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

      <div className="col-md-6 mb-3">
        <label htmlFor="country-select2" className="form-label">Compare with:</label>
        <br/>
        <select
          id="country-select2"
          className="form-select"
          value={selectedCountry2}
          onChange={handleCountryChange2}
        >
          <option value="">Choose a country</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.cca3}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountrySearch;
