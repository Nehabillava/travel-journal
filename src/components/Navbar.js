import React from 'react';
import '../style.css';

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-content">
                <img className="nav-img" src="/images/globe.png" />
                <h1 className='heading'>My Travel Journal</h1>
            </div>
        </nav>
    )
}