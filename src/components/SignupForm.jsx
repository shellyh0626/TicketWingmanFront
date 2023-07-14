import React from "react";
import { Link } from "react-router-dom";
import "../css/FormCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Google from "../assets/google.png";

const SignupForm = () => {
  return (
    <div id="formContainer">
      <h1 id="formHeading">Sign Up</h1>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="First name"
          required
        />
        <label for="floatingInput">Last Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="First name"
          required
        />
        <label for="floatingInput">First Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="First name"
          required
        />
        <label for="floatingInput">User Name</label>
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
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-primary btn-lg">
          Sign Up
        </button>
      </div>
      <br />
      <div className="center">
        <div className="line">
          <div className="or">OR</div>
        </div>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-primary btn-lg">
          <img src={Google} alt="" className="google-button-icon" />
          <label className="google-button-text"> Login with Google</label>
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
