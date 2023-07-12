import React from "react";
import UserProfile from "../components/UserProfile";

function Profile() {
  return (
    <div>
      <UserProfile
        firstName="Jane"
        lastName="Doe"
        userName="JaneDone28"
        email="JaneDoe@gmail.com"
        password="JaneDoe28"
      />
    </div>
  );
}

export default Profile;
