import React from 'react';
import '../styles/Navbar.css';

function Navbar(){
    return (
        <div className="parentDiv">
            <div>
                <img src="trollface.png" alt="trollface" className="trollface"/>
                <h2>Meme Generator</h2>
            </div>
            <div>
                <span className="projectText">React Course - Project 3</span>
            </div>
        </div>
    );
}

export default Navbar;