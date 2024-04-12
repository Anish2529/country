import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        // <div>Nav</div>
        <nav>
            <div className='navbar'>
                <h1>Where In the world?</h1>
                <div className="darkmode">
                    <span className="material-symbols-outlined">dark_mode</span>
                    <p>Dark Mode</p>
                </div>
            </div>
        </nav>

    )
}
