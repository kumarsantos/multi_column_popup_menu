import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"} style={{display:'flex',justifyContent:'space-between',width:'50%',padding:'15px',position:'absolute',marginLeft:'-300px',backgroundColor:' rgb(250, 250, 250)'
      ,border:'1px solid black',borderBottomRightRadius:'8px',borderBottomLeftRadius:'8px',borderColor:'#ddd',boxShadow:'0px 1px 1px 1px #ccc'}}
      >
        <div style={{fontSize:'12px',lineHeight:'22px',width:'150px'}}>
          <h4>UI componets</h4>
          <p><Link to='/sign-up' style={{textDecoration:'none'}}>New Course</Link></p>
          <p>Facebook.com</p>
          <p>Twitter.com</p>
          <p>Instagram</p>
        </div>
        <div style={{fontSize:'12px',lineHeight:'22px',width:'150px'}}>
          <h4>UI componets</h4>
          <p>Google.com</p>
          <p>Facebook.com</p>
          <p>Twitter.com</p>
          <p>Instagram</p>
        </div>
        <div style={{fontSize:'12px',lineHeight:'22px',width:'150px'}}>
          <h4>UI componets</h4>
          <p>Google.com</p>
          <p>Facebook.com</p>
          <p>Twitter.com</p>
          <p>Instagram</p>
        </div>
        <div style={{fontSize:'12px',lineHeight:'22px',width:'150px'}}>
          <h4>UI componets</h4>
          <p>Google.com</p>
          <p>Facebook.com</p>
          <p>Twitter.com</p>
          <p>Instagram</p>
        </div>
       
      </ul>
    </>
  );
}

export default Dropdown;
