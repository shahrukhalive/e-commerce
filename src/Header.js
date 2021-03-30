/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import React from 'react';
import './Header.css';
// eslint-disable-next-line no-unused-vars
import SearchIcon from "@material-ui/icons/Search";
import  ShoppingBasket  from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header() { 
    const [{basket,user},dispatch] = useStateValue();
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
            alt="amazon logo"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to = "/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          </Link>
          

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>

            <span className="header__optionLineTwo">Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>

            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasket />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    ); } export default Header 
