// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import video1 from '../images/video1.jpg';
import video2 from '../images/video2.jpg';
import video3 from '../images/video3.jpg';
import video4 from '../images/video4.jpg';
import video5 from '../images/video5.jpg';

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="sidebar">
        <h1>Cudemy</h1>
        <div className="options">
          <ul>
            <div className="home"><NavLink to='/'><li><p><HomeIcon></HomeIcon> Home</p></li></NavLink></div>
            <li><p><SubscriptionsIcon></SubscriptionsIcon> Subscriptions</p></li>
            <li><p><PlayCircleIcon></PlayCircleIcon> Your Courses</p></li>
            <li><p><DownloadIcon></DownloadIcon> Downloads</p></li>
          </ul>
        </div>
      </div>

      <div className="dashboard">
        <h1>
          Course Enrolled
        </h1>
        <div className="video-cards">
          <div className="video-card">
            <Link to="https://www.youtube.com/watch?v=B8S2jhWwTDg">
            <img src={video1} alt="Video Thumbnail" />
            </Link>
          </div>
          <div className="video-card">
            <Link to="https://www.youtube.com/watch?v=6M7jpiWJUXs">
            <img src={video2} alt="Video Thumbnail" />
            </Link>
          </div>
          <div className="video-card">
            <Link to="https://www.youtube.com/watch?v=kqtD5dpn9C8">
            <img src={video3} alt="Video Thumbnail" />
            </Link>
          </div>
          <div className="video-card">
            <Link to="https://www.youtube.com/watch?v=92bkNXvnpmg">
            <img src={video4} alt="Video Thumbnail" />
            </Link>
          </div>
          <div className="video-card">
            <Link to="https://www.youtube.com/watch?v=u64gyCdqawU">
            <img src={video5} alt="Video Thumbnail" />
            </Link>
          </div>
          
          <div className="icon">
            <button><AddIcon></AddIcon>add more courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
