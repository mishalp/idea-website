import React from 'react'
import search from "../../images/search.png";
import './navbar.css'

function Navbar() {
    const toggle = () => {
        document.getElementById("menu-options").classList.toggle("disable");
        document.getElementById("index").classList.toggle("index-toggle");
        document.getElementById("min-menu").classList.toggle("disable");
        document.getElementById("side-menu").classList.toggle("border");
      };
  return (
    <div className='navbar'>
        <div className="left">
        <span onClick={toggle} class="material-symbols-outlined">
          menu
        </span>
        <h2>IDEA</h2>
        </div>
        <div className="search-bar">
          <img src={search} alt="" />
          <div className="input-div">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="btns">
            <button>Sign in</button>
            <button>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar