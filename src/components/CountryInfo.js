import React from 'react';

const CountryInfo = ({ country }) => {
  if (!country) {
    return <div>Select a country to view information</div>;
  }

  return (
    <div className="country-info text-left">
    
      <div className="row">
       
        <div className="col-md-6">
          <p>
            <strong>Country:</strong> {country.name.common}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={country.flag}
            alt={`Flag of ${country.name.common}`}
            style={{ width: '100%', maxWidth: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;