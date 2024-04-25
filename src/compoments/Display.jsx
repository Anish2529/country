import React, { useState, useEffect } from 'react';
import './Country.css';
import './Display.css';
import Filter from './Filter';
import { Link } from 'react-router-dom';

export default function Dispaly() {
  const [countries, setCountries] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
        setfilteredData(data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, [])

  useEffect(() => {
    let filtered = countries.filter(item =>
      item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (region !== 'All' && region !== '') {
      filtered = filtered.filter(item =>
        item.region.toLowerCase().includes(region.toLowerCase())
      );
    }

    setfilteredData(filtered);
  }, [countries, searchQuery, region])

  return (
    <>
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRegion={setRegion} />

      <div className="countyDisplay">
        {
          filteredData.map((country) => (
            <Link className='link' to={`/country/${country.cca3}`}>
            <div className="country" key={country.cca3}>
              <img src={country.flags.png} alt="" />
              <div className="info">
                <h1>{country.name.common}</h1>
                <div className="details">
                  <h4>Population: <span>{country.population.toLocaleString()}</span></h4>
                  <h4>Region: <span>{country.region}</span></h4>
                  <h4>Capital: <span>{country.capital}</span></h4>
                </div>
              </div>
            </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}
