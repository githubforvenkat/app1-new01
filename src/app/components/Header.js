import React from 'react';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <Avatar src="https://example.com/avatar.png" alt="User avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header-search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-right">
        <HelpOutlineIcon />
      </div>
    </header>
  );
};

export default Header;
