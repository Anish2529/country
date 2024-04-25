import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from './Nav';
import './CountryDetails.css';

export default function CountryDetails() {
    const { id } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
                setCountry(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCountry();
    }, [id]);

    return (
        <>
            <Nav />
            <div className="countryDetails">
                <Link key={id} className='link' to={'/'}><button className='back_btn'><span className="material-symbols-outlined">arrow_left_alt</span>Back</button></Link>
                <div className="countryInfo">
                    {
                        country.map((items, index) => {
                            return (
                                <>
                                    <div className="flag">
                                        <img src={items.flags.png} alt={items.flags.alt} className='soloimg' />
                                    </div>
                                    <div className="textDetails">
                                        <h1>{items.name.common}</h1>
                                        <div className="info">
                                            <div className="info_sec">
                                                <p><b>Native Name:</b> {items.name.official}</p>
                                                <p><b>Population:</b> {items.population.toLocaleString()}</p>
                                                <p><b>Region:</b> {items.region}</p>
                                                <p><b>Sub Region:</b> {items.subregion}</p>
                                                <p><b>Capital:</b> {items.capital}</p>
                                            </div>
                                            <div className="info_sec">
                                                <p><b>Top Level Domain: </b>{items.tld.map((domain, index) => {
                                                    return (<span key={index}>{domain}</span>);
                                                })}</p>
                                                <p>
                                                    <b>Currencies: </b>
                                                    {Object.values(items.currencies).map((currency, index, array) => (
                                                        <span key={currency.name}>
                                                            {currency.name}
                                                            {index !== array.length - 1 && ', '}
                                                        </span>
                                                    ))}
                                                </p>

                                                <p>
                                                    <b>Languages: </b>
                                                    {Object.entries(items.languages).map(([code, name], index, array) => (
                                                        <span key={code}>
                                                            {name}
                                                            {index !== array.length - 1 && ', '}
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bordes">
                                            <p><b>Border Countries:</b> </p>
                                            <div className="buttonsborders">
                                                {
                                                    items.borders.map((border, index) => {
                                                        return (
                                                            <Link className='link' to={`/country/${border}`}>
                                                                <button className='borderbutton' key={index}>{border}</button>
                                                            </Link>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </>

                            );
                        })
                    }

                </div>

            </div>

        </>
    );
}
