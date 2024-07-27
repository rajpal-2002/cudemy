import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Notification.css'; 
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Notification = () => {

  const notifications = [
    'Code with harry uplaoded a new video',
    'Watch latest courses on Web-dev',
    'Subsription ending in 7 days!!!',
  ];

  return (
    <div className="notifications-container">
      <div className="notifications-icon">
        <NotificationsIcon fontSize="large" />
      </div>
      <div className="notifications-list">
      <NavLink to='/'>
        <div className="back_notification">
            <ArrowBackIcon></ArrowBackIcon>
        </div>
    </NavLink>
        <h3>Notifications</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
