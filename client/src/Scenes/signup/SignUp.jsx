import React, { useState } from "react";
import "Scenes/signup/SignUp.css";
import Header from "components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const data = { name, email, password, confirmPassword };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }
    console.log(data);

    await axios
      .post("http://localhost:3001/signup", {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <div className="con">
        <div className="left-side">
          <div className="left">
            <h3>If you already has an account, just sign in.</h3>
            <p>
              <Link to="/login" className="up">
                Sign In
              </Link>
            </p>
          </div>
          <div className="forms sign-up">
            <h2>Create your Account</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <label>
                <span>Confirm Password</span>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  autoComplete="off"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
              <button type="button" className="submit" onClick={handleSubmit}>
              Sign Up
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

/* <div className="container">
        <div className="center ">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="txt_field">
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span></span>
              <label htmlFor="username">Username</label>
            </div>
            <div className="txt_field">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span></span>
              <label htmlFor="email">Email</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span></span>
              <label htmlFor="password">Password</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                autoComplete="off"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span></span>
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
            <input type="submit" value="Sign Up" formAction="/sign-up" />
          </form>
          <p>Already Have an Account</p>
          <Link
            to="/login"
            className="btn btn-default border w-25 bg-light rounded-25px "
          >
            Login
          </Link>
        </div>
      </div> */
