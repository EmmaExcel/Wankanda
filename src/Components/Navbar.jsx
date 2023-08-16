import React from "react";
import './Navbar.css'
import Zuma from '../images/zuma.png'
import profile from '../images/profile.svg'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={Zuma} alt="" />
      </div>
      <div className="nav-content">
        <ul>
          <li>Movies</li>
          <li>Tv Shows</li>
          <li>My List</li>
          <li>
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
      <div className="nav-components-container">
        <div className="nav-components">
          <li>
            <i class="fa-solid fa-bell"></i>
          </li>

          <li>
            <i class="fa-solid fa-user"></i>
          </li>
        </div>
        <div className="nav-profile">
            <p>Haaa</p>
            <img src={profile}  />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
