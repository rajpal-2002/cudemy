import React from 'react';
import './Signin.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Signin = () => (
  <div id="loginform">
    <NavLink to='/'>
        <div className="back_signin">
            <ArrowBackIcon></ArrowBackIcon>
        </div>
    </NavLink>
    <FormHeader title="Login now" />
    <Form />
    <OtherMethods />
  </div>
);

const FormHeader = ({ title }) => (
  <h2 id="headerTitle">{title}</h2>
);

const Form = () => (
  <div>
    <FormInput description="Username" placeholder="Enter your username" type="text" />
    <FormInput description="Password" placeholder="Enter your password" type="password" />
    <FormButton title="Log in" />
  </div>
);

const FormButton = ({ title }) => (
  <div id="button" className="row">
    <button>{title}</button>
  </div>
);

const FormInput = ({ description, placeholder, type }) => (
  <div className="row">
    <label>{description}</label>
    <input type={type} placeholder={placeholder} />
  </div>
);

const OtherMethods = () => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <FacebookIcon />
      <TwitterIcon />
      <GoogleIcon />
    </div>
  </div>
);

export default Signin;
