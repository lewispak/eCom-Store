import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="left">

          {/* --- Navbar Web Settings --- */}
          <div className="item">
            <img src="en.png" alt="" />
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>

          {/* --- Navbar Shopping Categories --- */}
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>

        </div>

        {/* --- Navbar Center Logo --- */}
        <div className="center">
          <Link to="/">PAKSTORE</Link>
        </div>

        <div className="right">

          {/* --- Navbar Menu Items --- */}
          <div className="center">
            <Link to="/">Home</Link>
          </div>
          <div className="center">
            <Link to="/">About</Link>
          </div>
          <div className="center">
            <Link to="/">Contact</Link>
          </div>
          <div className="center">
            <Link to="/">Stores</Link>
          </div>

          {/* --- Icons --- */}
          <SearchIcon/>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/>
          <div className="cartIicon">
            <ShoppingCartOutlinedIcon/>
            <span>0</span>
          </div>

        </div>
      </div>
    </div>
    )
}

export default Navbar