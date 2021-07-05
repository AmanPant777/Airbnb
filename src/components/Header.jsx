import React from "react";
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Header = () => {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="data:image/png;base64,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"
      />
      <div className='header_center'>
        <input type='text'></input>
        <SearchIcon/>
      </div>
      <div className='header-right'>
        <p>Become a host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <AccountCircleIcon/>
      </div>
    </div>
  )
};

export default Header;
