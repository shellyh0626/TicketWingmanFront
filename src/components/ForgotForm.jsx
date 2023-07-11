import React from "react";
import { Link } from "react-router-dom";
import "../css/ForgotFormCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ForgotForm() {
  return (
    <div id="forgotPasswordContainer">
      <h1 id="forgotPasswordHeading">Forgot Password</h1>
      <p id="forgotPasswordMessage">
        Please enter your email address and we will send you an email about how
        to reset your password.
      </p>
      <div class="form-floating mb-3">
        <input
          type="email"
          id="forgotEmail"
          class="form-control"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">Email</label>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-danger btn-lg">
          Reset Password
        </button>
      </div>
      <Link
        to="/login"
        id="loginNav"
        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        Back to Login
      </Link>
    </div>
  );
}

export default ForgotForm;
