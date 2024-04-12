import React, { useState, useEffect } from 'react';
import './Country.css';

export default function County() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCountries(data)
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    }, [])
    return (
        <>
            {
                countries.map((country) => (
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
                ))
            }
        </>
    )
}
