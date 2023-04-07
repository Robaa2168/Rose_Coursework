import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const CostOfLiving = ({ countryCode, capital }) => {
  const [costOfLivingData, setCostOfLivingData] = useState(null);

  useEffect(() => {
    console.log('Country Code:', countryCode);
    console.log('Capital:', capital);
    if (countryCode && capital) {
      fetchCostOfLivingData(countryCode, capital);
    }
  }, [countryCode, capital]);



  const fetchCostOfLivingData = async (countryName, cityName) => {
    try {
      const response = await axios.get(
        `https://cost-of-living-and-prices.p.rapidapi.com/prices`,
        {
          headers: {
            'X-RapidAPI-Key': '2f52f36206msh6c98a3d8f128180p1ade89jsnb03cb5400cdb',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
          },
          params: {
            country_name: countryName,
            city_name: cityName
          }
        }
      );
      setCostOfLivingData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching cost of living data:', error);
    }
  };

  const prepareChartData = () => {
    const labels = Object.keys(costOfLivingData);
    const data = Object.values(costOfLivingData);
    return {
      labels,
      datasets: [
        {
          label: 'Cost of Living',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  if (!costOfLivingData) {
    return <div>Loading cost of living data...</div>;
  }

  return (
    <div className="cost-of-living">
      <h3>Cost of Living</h3>
      <Bar data={prepareChartData()} />
    </div>
  );
};

export default CostOfLiving;
