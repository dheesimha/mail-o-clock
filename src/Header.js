import React from 'react';

import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

function Header() {
  return (
    <div className="header">
      <div className="left-header">
          <IconButton>
        <MenuIcon/>
        </IconButton>
        <img src="https://1000logos.net/wp-content/uploads/2018/04/Gmail-logo-new.jpg" alt="gmail-logo"/>
      </div>
      <div className="middle-header">
        <SearchIcon/>
        <input placeholder="Search Mail" type="text"/>
        <ArrowDropDownIcon className="header-inputCaret"/>
      </div>
      <div className="right-header">
        
      </div>
    </div>
  );
}

export default Header;