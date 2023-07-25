import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUserThunk } from "../redux/users/user.actions";
import "../css/ForgotFormCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ForgotForm() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.newPassword !== userData.confirmPassword) {
      alert("New password and confirmation do not match!");
      return;
    }

    const updatedUserData = {
      password: userData.newPassword,
    };

    console.log("Updated User Data:", updatedUserData);
    dispatch(editUserThunk(userData.email, updatedUserData));

    setUserData({
      email: "",
      newPassword: "",
      confirmPassword: "",
    });
    setVisible(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="forgotPasswordContainer">
        <h1 id="forgotPasswordHeading">Passoword Changed</h1>
        <p id="forgotPasswordMessage">
          If the email provided exists, then the password has been successfully
          changed!
        </p>
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

  return (
    <div id="forgotPasswordContainer">
      <h1 id="forgotPasswordHeading">Forgot Password</h1>
      <p id="forgotPasswordMessage">
        Please enter your email address and a new password. If an email exists,
        the password will be changed.
      </p>
      <form>
        <div class="form-floating mb-3">
          <input
            type="email"
            name="email"
            id="forgotEmail"
            class="form-control"
            placeholder="name@example.com"
            onChange={handleChange}
            required
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type={visible ? "text" : "password"}
            id="newPassword"
            class="form-control"
            placeholder="*****"
            name="newPassword"
            onChange={handleChange}
            required
          />
          <label for="floatingInput">Create new password</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type={visible ? "text" : "password"}
            id="confirmPassword"
            class="form-control"
            placeholder="*****"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
          <label for="floatingInput">Confirm new password</label>
        </div>
        <button
          type="button"
          class="btn btn-light btn-sm"
          onClick={() => setVisible(!visible)}
        >
          <i class="bi bi-eye" /> Show Password
        </button>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            type="submit"
            class="btn btn-danger btn-lg"
            onClick={handleSubmit}
          >
            Reset Password
          </button>
        </div>
      </form>
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
