import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
       <h4 style={{color:'white',marginLeft:"10px"}}>Erxien</h4>
        <ul className={click ? "nav-menu active" : "nav-menu"} >
                  
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            
          >
            <Link
              to="/services"
              className="nav-links"
            >
              <span className=''>Mega Menus </span>
            </Link>
            {dropdown && <Dropdown />}
          </li>
        
         
      
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
