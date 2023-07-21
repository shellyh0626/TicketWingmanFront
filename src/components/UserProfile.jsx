import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../redux/users/user.actions";
import "../css/UserProfileCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function UserProfile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/profile/edit");
  };

  useEffect(() => {
    console.log(currentUser.email);
    dispatch(me(currentUser.email));
  }, [dispatch]);

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
          readOnly
          value={currentUser.firstName}
          defaultValue={currentUser.firstName}
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
            readOnly
            value={currentUser.lastName}
            defaultValue={currentUser.lastName}
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
          readOnly
          value={currentUser.email}
          defaultValue={currentUser.email}
        />
      </div>
      <div class="mb-3">
        <label class="form-label col-form-label-lg">Password</label>
        <input
          id="profilePasswordInput"
          type="password"
          class="form-control form-control-lg"
          placeholder="Password"
          readOnly
          value={currentUser.password}
          defaultValue={currentUser.password}
        />
      </div>
      <button type="button" class="btn btn-primary" onClick={handleEdit}>
        <i class="bi bi-pen"></i> Edit Profile
      </button>
    </div>
  );
}

export default UserProfile;
