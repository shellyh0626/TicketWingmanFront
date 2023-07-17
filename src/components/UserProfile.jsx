import React from "react";
import "../css/UserProfileCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";

function UserProfile(props) {
  const { firstName, lastName, email, password } = props;
  return (
    <div id="profileContainer">
      <img
        id="userProfilePicture"
        src="https://cdn-icons-png.flaticon.com/512/3502/3502768.png"
        class="rounded mx-auto d-block"
      />
      <div class="mb-3">
        <label id="profileFirstName" class="form-label col-form-label-lg">
          First Name
        </label>
        <input
          id="profileFirstNameInput"
          type="text"
          class="form-control form-control-lg"
          placeholder="First name"
          defaultValue={firstName}
        />
        <div>
          <label id="profileLastName" class="form-label col-form-label-lg">
            Last Name
          </label>
          <input
            id="profileLastNameInput"
            type="text"
            class="form-control form-control-lg"
            placeholder="Last name"
            defaultValue={lastName}
          />
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label col-form-label-lg">Email</label>
        <input
          id="profileEmailInput"
          type="email"
          class="form-control form-control-lg"
          placeholder="Email"
          defaultValue={email}
        />
      </div>
      <div class="mb-3">
        <label class="form-label col-form-label-lg">Passowrd</label>
        <input
          id="profilePasswordInput"
          type="password"
          class="form-control form-control-lg"
          placeholder="Password"
          defaultValue={password}
        />
      </div>
    </div>
  );
}

export default UserProfile;
