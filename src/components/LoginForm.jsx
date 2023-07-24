import React from "react";
import { Link } from "react-router-dom";
import "../css/FormCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../redux/users/user.actions";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(authLogin(email, password));

    navigate("/");
  };

  return (
    <div id="formContainer">
      <h1 id="formHeading">Login</h1>
      <div class="d-grid gap-2 col-6 mx-auto">
        <a
          href="http://localhost:8080/auth/google"
          type="button"
          class="btn btn-primary btn-lg"
        >
          <img src={Google} alt="" className="google-button-icon" />
          <label className="google-button-text"> Login with Google</label>
        </a>
      </div>
      <br />
      <div className="center">
        <div className="line">
          <div className="or">OR</div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="name@example.com"
            name="email"
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
            name="password"
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
          <button type="submit" class="btn btn-primary btn-lg">
            Login
          </button>
        </div>
      </form>
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
