import "./Header.css";
import React from "react";
import logo from "../Images/logo.png";
import searchIcon from "../Images/search-icon.png";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"; 

const Header = () => {
  return (
    <>
      <div className="heading">
        <div className="icon">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="searchbar-links">
          <div className="searchbar">
            <input className="search" placeholder="Search"></input> 
          </div>
          <div className="icon-search-cnt">
          <img
              className="search-icon"
              src={searchIcon}
              alt="searchIcon"
              width="20px"
              height="20px"
            />
          </div>
        </div>
        <div className="links">
          <a className="nav">Home</a>
          <a  className="nav">What's on</a>
          <a   className="nav ">
          <Link className="nav-none" to="/bookvenue">Book Venue</Link>
          </a>
          <a  className="nav">Gallery</a>
          <a  className="nav">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Header;
