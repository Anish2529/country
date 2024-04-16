// import React, { useState } from 'react';
// import './Filter.css';

// export default function Filter({ searchQuery, setSearchQuery, setRegion }) {
//     const [open, setOpen] = useState(false);
//     const Continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

//     const changeSearch = (e) => {
//         setSearchQuery(e.target.value);
//     }

//     const changeRegion = (e) => {
//         setRegion(e.target.value);
//     }

//     return (
//         <div className="filter">
//             <div className="search">
//                 <input type="text" name="" value={searchQuery} placeholder='Search for a country...' onChange={changeSearch} />
//                 <span className="material-symbols-outlined">search</span>
//             </div>

//             {/* <select name="" id="" className="filterRegion" onChange={changeRegion}>
//                 <option value="">Filter By region</option>
//                 {Continents.map((continent) => (
//                     <option key={continent} value={continent}>{continent}</option>
//                 ))}
//             </select> */}
//             <div className="dropdown-container">
//                 <div className="dropdown-header" onClick={() => setOpen(!open)}>
//                     <p>Filter By Region</p>
//                     <span className={`material-symbols-outlined ${open ? "open" : ""}`}>expand_less</span>
//                 </div>
//                 {open && (
//                     <div className="dropdown-content">
//                         {Continents.map((continent) => (
//                             <p key={continent} onClick={() => changeRegion(continent)}>{continent}</p>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react';
import './Filter.css';

export default function Filter({ searchQuery, setSearchQuery, setRegion }) {
    const Continents = ["All","Africa", "America", "Asia", "Europe", "Oceania"];
    const [open, setOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Filter By Region");

    const changeSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const changeRegion = (continent) => {
        if (continent === "All") {
            setRegion(''); // Set region to empty string to display all countries
        } else {
            setRegion(continent);
        }
        setRegion(continent);
        setSelectedRegion(continent);
        setOpen(false); // Close the dropdown after selecting a region
    };

    return (
        <div className="filter">
            <div className="search">
                <input type="text" name="" value={searchQuery} placeholder='Search for a country...' onChange={changeSearch} />
                <span className="material-symbols-outlined">search</span>
            </div>

            <div className="filterRegion" onClick={() => setOpen(!open)}>
                <p>{selectedRegion}</p>
                <span className={`material-symbols-outlined ${open ? "open" : ""}`}>expand_less</span>
                {open && (
                    <div className="filterRegion_dropdown">
                        {/* <p onClick={() => changeRegion('')}>All</p> */}
                        {Continents.map((continent) => (
                            <p key={continent} onClick={() => changeRegion(continent)}>{continent}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
