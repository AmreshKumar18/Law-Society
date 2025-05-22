import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../Assets/login_img.png";
import logo from "../Assets/logo_bg.jpg";
import { UserData } from "../UserContext";
import { useForm } from "react-hook-form";

const Register = () => {
  const { newUser } = UserData();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await newUser(data.fullname, data.email, data.password);
    // navigate("/login");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <label htmlFor="">Full Name:</label>
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                />
              </div>
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
                  already have an account?<Link to="/login"> click here</Link>
                </h6>
              </div>
              <div className=" text-center">
                <button className="btn">Register Account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
