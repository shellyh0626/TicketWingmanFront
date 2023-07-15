import React from "react";
import UserProfile from "../components/UserProfile";
import { useSelector } from "react-redux";

function Profile() {
  const currentUserEmail = useSelector((state) => state.user.email);
  const currentUserFirstName = useSelector((state) => state.user.firstName);
  const currentUserLastName = useSelector((state) => state.user.lastName);
  return (
    <div>
      <UserProfile
        firstName={currentUserFirstName}
        lastName={currentUserLastName}
        userName="JaneDone28"
        email={currentUserEmail}
        password="******"
      />
    </div>
  );
}

export default Profile;
