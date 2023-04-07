import React, { useState } from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CountrySearch from './CountrySearch';
import CountryInfo from './CountryInfo';
import CostOfLiving from './CostOfLiving';
import Map from './Map';

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (countryData) => {
    setSelectedCountry(countryData);
  };

  return (


      <div className="container my-5">
        <CountrySearch onCountrySelect={handleCountrySelect} />
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {selectedCountry ? (
            <>
              <div className="col">
                <div className="card h-100 border-0 shadow">
                  <div className="card-header">
                    <h5 className="card-title">Country Information</h5>
                  </div>
                  <div className="card-body">
                    <CountryInfo country={selectedCountry} />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0 shadow">
                  <div className="card-header">
                    <h5 className="card-title">Cost of Living</h5>
                  </div>
                  <div className="card-body">
                    <CostOfLiving countryCode={selectedCountry.iso_alpha3} />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0 shadow">
                  <div className="card-header">
                    <h5 className="card-title">Map</h5>
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
          ) : (
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
}

export default Home;
