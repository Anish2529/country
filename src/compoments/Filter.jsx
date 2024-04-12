import React, { useState } from 'react'
import './Filter.css'

export default function Filter() {
    const [open, setOpen] = useState(false);
    const Continents = ["Africa", "America", "Asia", "Europe", "Oceania"];
    return (
        <div className="filter">
            <div className="search">
                <input type="text" name="" id="" placeholder='Search for a country...' />
                <span className="material-symbols-outlined">search</span>
            </div>
            <div className="filterRegion" onClick={() => setOpen(!open)}>
                <p>Filter by Region</p>
                <span className="material-symbols-outlined">expand_less</span>
                {open &&
                    <div className="filterRegion_dropdown">
                        {
                            Continents.map((continet) => (
                                <p key={continet} onClick={() => setOpen(false)}>{continet}</p>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}
