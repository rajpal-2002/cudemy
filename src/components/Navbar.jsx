import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Badge from '@mui/material/Badge';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="left">
      <NavLink to='/menu'>
      <div className="menuicon">
        <SubscriptionsIcon></SubscriptionsIcon>
      </div>
      </NavLink>
      <div className="logo">
        <h1>Cudemy</h1>
      </div>
      </div>
      <div className="right">
      <div className="searchbar">
        <input type="text" placeholder=" Search courses" className="inputround"></input>
        <SearchIcon></SearchIcon>
      </div>

      <NavLink to='/signin'>
      <div className="signin">
        <button className="buttonround">        Sign In         </button>
      </div>
      </NavLink>

      <NavLink to='/chatbot'>
        <div className="chatbot_icon">
          <ForumIcon></ForumIcon>
        </div>
      </NavLink>

      <NavLink to='/notification'>
      <div className="notifications">
      <Badge badgeContent={3} color="primary">
      <NotificationsIcon />
    </Badge>
      </div>
      </NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar;