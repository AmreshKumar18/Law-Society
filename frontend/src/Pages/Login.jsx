import React from "react";
import { Link } from "react-router-dom";
import login_img from "../Assets/login_img.png";
import logo from "../Assets/icon.png";

const Login = () => {
  return (
    <>
      <div className="section">
        <div className="login_container">
          <div className="login_img">
            <img src={login_img} alt="" />
          </div>
          <div className="login_form">
            <div className="login_logo">
              <img src={logo} alt="" />
            </div>
            <h4 className=" text-center">Welcome To Law Society</h4>
            <div className="input_field">
              <label htmlFor="">Email:</label>
              <input type="email" />
            </div>
            <div className="input_field">
              <label htmlFor="">Password:</label>
              <input type="text" />
            </div>
            <div>
              <h6>
                forgot password?<Link> click here</Link>
              </h6>
              <h6>
                Create new account?<Link to="/register"> click here</Link>
              </h6>
            </div>
            <div className=" text-center">
              <button className="btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
