import React from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";



import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';

import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector(state => state.cart.products)

  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="left">

          {/* --- Navbar Web Settings --- */}
          <div className="item">
            <img src="/en.png" alt="" />
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>

          {/* --- Navbar Shopping Categories --- */}
          <div className="item">
            <Link className="link" to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>

        </div>

        {/* --- Navbar Center Logo --- */}
        <div className="center">
          <Link className="link" to="/">HOKO</Link>
        </div>

        <div className="right">

          {/* --- Navbar Menu Items --- */}
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>

          {/* --- Icons --- */}
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>

        </div>
        
      </div>
      {open && <Cart/>}
    </div>
    )
}

export default Navbar