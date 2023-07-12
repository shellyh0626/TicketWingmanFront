import React from "react";
import { Link } from "react-router-dom";
import "../css/LoginFormCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Google from "../image/google.png";

const LoginForm = () => {
  return (
    <div id="loginFormContainer">
      <h1 id="loginFormHeading">Login</h1>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-primary btn-lg">
          <img src={Google} alt="" className="google-button-icon" />
          <label className="google-button-text"> Login with Google</label>
        </button>
      </div>
      <br />
      <div className="center">
        <div className="line">
          <div className="or">OR</div>
        </div>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <label for="floatingInput">Password</label>
      </div>
      <Link
        to="/forgot"
        id="forgotPasswordNav"
        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        Forgot Password?
      </Link>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-primary btn-lg">
          Login
        </button>
      </div>
      <Link
        to="/signup"
        id="signupNav"
        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        New? Sign Up
      </Link>
    </div>
  );
};

export default LoginForm;