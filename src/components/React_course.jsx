import React from 'react';
import { Link } from 'react-router-dom';
import './React_course.css';
import video6 from '../images/video6.jpg';
import video7 from '../images/video7.jpg';
import video8 from '../images/video8.jpg';
import video9 from '../images/video9.jpg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { NavLink } from "react-router-dom";

const React_course = () => {
  return (
    <div className="menu_react">


      <div className="dashboard_react">
      <NavLink to='/'>
        <div className="back_notification">
            <ArrowBackIcon></ArrowBackIcon>
        </div>
    </NavLink>
        <h1>
          React JS Courses
        </h1>
        <div className="video-cards_react" >
          <div className="video-card_react">
            <Link to="https://www.youtube.com/watch?v=Xe8CkYZvCig">
            <img src={video6} alt="Video Thumbnail" />
            </Link>
          </div>
          <div className="video-card_react">
            <Link to="https://www.youtube.com/watch?v=SqcY0GlETPk">
            <img src={video7} alt="Video Thumbnail" />
            </Link>
          </div>
          <div className="video-card_react">
            <Link to="https://www.youtube.com/watch?v=gY5sGvq-8h8&t=7s">
            <img src={video8} alt="Video Thumbnail" />
            </Link>
          </div>
          <div className="video-card_react">
            <Link to="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt">
            <img src={video9} alt="Video Thumbnail" />
            </Link>
          </div>
          
    
        </div>
      </div>
    </div>
  );
};

export default React_course;
