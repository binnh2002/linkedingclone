import React from "react";
import "./header.css";
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';

import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      {/* Left */}
      <div className="header__left">
        <img
          src="https://www.acld.org/wp-content/uploads/linkedin-icon_128x128.png"
          alt="linkedin icon"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search"/>
        </div>
      </div>
      {/* right */}

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={WorkIcon} title="Jobs"/>
        <HeaderOption Icon={MessageIcon} title="Messaging"/>
        <HeaderOption avatar="https://th.bing.com/th/id/OIP.GrLlNSUbk9R_VftF4jQPpAHaHO?pid=ImgDet&rs=1" title='me' />

      </div>
    </div>
  );
}

export default Header;
