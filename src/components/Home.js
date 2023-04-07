import React, { useState } from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CountrySearch from './CountrySearch';
import CountryInfo from './CountryInfo';
import CostOfLiving from './CostOfLiving';
import Map from './Map';
import { LoadScript } from '@react-google-maps/api';

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryName, setCountryName] = useState(null); 
  const [selectedCountry2, setSelectedCountry2] = useState(null);
  const [countryName2, setCountryName2] = useState(null); 

  const handleCountrySelect = (countryData) => {
    setSelectedCountry(countryData);
    setCountryName(countryData.name.common);
  };

  const handleCountrySelect2 = (countryData) => {
    setSelectedCountry2(countryData);
    setCountryName2(countryData.name.common); // set country name instead of code
  };

  return (
    <div className="container my-5">
      <CountrySearch
        onCountrySelect={handleCountrySelect}
        onCountrySelect2={handleCountrySelect2}
      />
       <LoadScript googleMapsApiKey="AIzaSyDOzxbdHOwd3q8Rl4YCB1XDSEshDwcnOxE"></LoadScript>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-2">
        {selectedCountry && (
          <>
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-header">
                  <h6 className="card-title">
                    {selectedCountry.name.common}<br/> Country Information
                  </h6>
                </div>
                <div className="card-body">
                  <CountryInfo country={selectedCountry} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-header">
                  <h6 className="card-title">
                    {selectedCountry.name.common}<br/> Cost of Living
                  </h6>
                </div>
                <div className="card-body">
                <CostOfLiving countryName={countryName} capital={selectedCountry.capital} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-header">
                  <h6 className="card-title">
                    {selectedCountry.name.common}<br/> Map
                  </h6>
                </div>
                <div className="card-body">
                <Map
          capital={{
            lat: parseFloat(selectedCountry.latlng[0]),
            lng: parseFloat(selectedCountry.latlng[1]),
          }}
        />
                </div>
              </div>
            </div>
          </>
        )}
        {selectedCountry2 && (
          <>
            <div className="col mt-3">
              <div className="card h-100 border-0 shadow">
                <div className="card-header">
                  <h6 className="card-title">
                    {selectedCountry2.name.common}<br/> Country Information
                  </h6>
                </div>
                <div className="card-body">
                <CountryInfo country={selectedCountry2} />
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card h-100 border-0 shadow">
                <div className="card-header">
                  <h6 className="card-title">
                    {selectedCountry2.name.common} <br/>Cost of Living
                  </h6>
                </div>
                <div className="card-body">
                <CostOfLiving countryName={countryName2} capital={selectedCountry2.capital} />
                
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card h-100 border-0 shadow">
                <div className="card-header">
                  <h5 className="card-title">
                    {selectedCountry2.name.common} <br/> Map
                  </h5>
                </div>
                <div className="card-body">
                <Map
          capital={{
            lat: parseFloat(selectedCountry2.latlng[0]),
            lng: parseFloat(selectedCountry2.latlng[1]),
          }}
        />
      </div>
            </div>
          </div>
    
      </>
    )}
    {!(selectedCountry || selectedCountry2) && (
      <div className="col mx-auto">
        <div className="card h-100 border-0 shadow">
          <div className="card-body d-flex align-items-center justify-content-center">
            <h5 className="text-muted">No country selected</h5>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

);
};

export default Home;