import React from "react";
import './style/Header.css'
import SearchBar from "./SearchBar";

const Header = ({ searchTerm, setSearchTerm }) =>{
    return(
            <header className="header">

            <div className="header-top">
                <div className="logo">
                <div className="logo-icon"></div>
                <h1>
                    Champion <span>NEWS</span>
                </h1>
                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <nav className="navbar">
                <ul>
                <li>ALL</li>
                <li>SOCCER</li>
                <li>BASKETBALL</li>
                <li>TENNIS</li>
                <li>ATHLETICS</li>
                <li>RUGBY</li>
                <li>FORMULA 1</li>
                <li>SWIMMING</li>
                <li>BASEBALL</li>
                </ul>
            </nav>
            </header>
    )
}

export default Header;