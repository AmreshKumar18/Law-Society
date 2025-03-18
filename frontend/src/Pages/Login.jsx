import React from "react";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../Assets/login_img.png";
import logo from "../Assets/icon.png";
import { useForm } from "react-hook-form";
import { UserData } from "../UserContext";

const Login = () => {
  const { loginUser } = UserData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await loginUser(data.email, data.password);
    navigate("/");
  };

  return (
    <>
      <div className="section">
        <div className="login_container">
          <div className="login_img">
            <img src={login_img} alt="" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login_form">
              <div className="login_logo">
                <img src={logo} alt="" />
              </div>
              <h4 className=" text-center">Welcome To Law Society</h4>
              <div className="input_field">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="input_field">
                <label htmlFor="">Password:</label>
                <input
                  type="text"
                  {...register("password", { required: true })}
                />
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
