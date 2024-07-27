// Page2.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Page2.css';
import html from '../images/html.png';
import css from '../images/css.svg';
import react from '../images/react.svg';
import angular from '../images/angular.svg';
import c from '../images/c.svg';
import java from '../images/java.svg';
import javascript from '../images/javascript.svg';
import mongodb from '../images/mongodb.svg';
import python from '../images/python.svg';

const ImageCardList = ({ skillData }) => {
  return (
    <div className="image-card-list">
      {skillData.map(({ imageUrl, path }) => (
        <NavLink to={path} className="image-card">
          <img src={imageUrl} />
        </NavLink>
      ))}
    </div>
  );
};

const Page2 = () => {
  const skillData = [
    { imageUrl: html, path: '/' },
    { imageUrl: css, path: '/' },
    { imageUrl: javascript, path: '/' },
    { imageUrl: react, path: '/react_course' },
    { imageUrl: angular, path: '/' },
    { imageUrl: mongodb, path: '/' },
    { imageUrl: c, path: '/' },
    { imageUrl: java, path: '/' },
    { imageUrl: python, path: '/' },
  ];

  return (
    <div>
      <h2 className="component-title">Top skills you can learn</h2>
      <ImageCardList skillData={skillData} />
    </div>
  );
};

export default Page2;
