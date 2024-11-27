import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import styled from 'styled-components';


const Container = styled.div`
img{
margin-top:25px;
}
button{
    border: none;
    color: #dee2e6;
    background: #080808;
    }

  .navbar {
    position: relative;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Amita", serif;
  }

  .nav-content {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  /* Left-side Links */
  .left-links,
  .right-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .left-links li,
  .right-links li {
    position: relative;
    margin: 0 15px;
  }

  .nav-links a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    padding: 15px 20px;
    display: block;
  }

  .nav-links a:hover {
   color: #5fcac7;
   border-radius: 5px;

  }

  /* Dropdown Menu */
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: white;
    border: 2px solid #5fcac7;
    width: 200px;
    top: 100%;
    left: 0;
    padding: 10px;
    z-index: 1;
    
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu p {
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  //Centered Logo 
  .center-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 120px;
    z-index:1;
  }

  // Hamburger Icon 
  .hamburger-icon {
    display: none;
    font-size: 30px;
    color: white;
    cursor: pointer;
  }

  //Responsive Styles 
  @media (max-width: 480px) {
  .center-logo {
    height: 4.5rem;
  
  }
   
  }
  @media (max-width: 1024px) {

    .nav-links {
      display: none; 
      position: absolute;
      top: 60px; 
      right: 0;
      left: 0;
      background-color: #333;
      text-align: center;
    }

    .nav-links.left-links,
    .nav-links.right-links {
      flex-direction: column;
      margin: 0;
      padding: 0;
    }

    .nav-links li {
      margin: 10px 0;
    }

    .hamburger-icon {
      display: block; 
      position: absolute;
      right: 20px;
      top: -20px;
      color:black;
      background-color:white;
    
    }
  }


.nav-links.active {
  display: flex;             
  z-index: 1;               
  background-color:white; 
  color: white;              
  padding: 0px 15px;    
  border-radius: 5px;     

}

.left-links.active{
    width: 8em;
    z-index: 999;
}
.right-links.active{
    margin-left: 7.3em;
    margin-right: 25rem;
    z-index: 99;
}

`;

export default function Navbar() {

  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(prevState => !prevState);
  };

  return (
    <Container>
      <div className="Nav_sec">
        <nav className="navbar">
          <div className="nav-content">
            {/* Left-side Navbar Links */}
            <ul className={`nav-links left-links ${isNavbarActive ? 'active' : ''}`}>
              <li className="dropdown">
                <a href="#">Home</a>
                <div className="dropdown-menu">
                  <p>Home content</p>
                </div>
              </li>
              <li className="dropdown">
                <a href="#">About</a>
                <div className="dropdown-menu">
                  <p>About content</p>
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Services</a>
                <div className="dropdown-menu">
                  <p>Services content</p>
                </div>
              </li>
            </ul>

            {/* Centered Logo */}
            <img className="center-logo" src={logo} alt="Logo" />

            {/* Right-side Navbar Links */}
            <ul className={`nav-links right-links ${isNavbarActive ? 'active' : ''}`}>
              <li className="dropdown">
                <a href="#">Blog</a>
                <div className="dropdown-menu">
                  <p>Blog content</p>
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Contact</a>
                <div className="dropdown-menu">
                  <p>Contact content</p>
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Shop</a>
                <div className="dropdown-menu">
                  <p>Shop content</p>
                </div>
              </li>
            </ul>

            {/* Hamburger Icon for Mobile/Tablet */}
            <button
              className="hamburger-icon"
              id="hamburger-icon"
              onClick={toggleNavbar}
            >
              ☰
            </button>
          </div>
        </nav>
      </div>
    </Container>
  );
}
