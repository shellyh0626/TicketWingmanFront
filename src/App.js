import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { ProtectedRoute } from "./utils/Auth";
import { useDispatch, useSelector } from "react-redux";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import Emission from "./pages/Emission";
import { logout } from "./redux/users/user.actions";
import Weather from "./pages/Weather"

/* const LinkButton = ({ to, children, onClick }) => (
  <NavLink to={to} onClick={onClick}>
    {children}
  </NavLink>
); */

function App() {
  const dispatch = useDispatch();
  /* const navigate = useNavigate(); */
  const isLoggedIn = useSelector((state) => !!state.user.id);

  /*   const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  }; */
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-danger">
          <ul className="navbar-nav mx-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <Link to="/" className="nav-link mx-2 active">
                  Home
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link mx-2 active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link mx-2">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link mx-2">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/emission" className="nav-link mx-2">
                    Emission Calculator
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <Link to="/profile" className="nav-link mx-2">
                  User Profile
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                {/*  <LinkButton className="nav-link mx-2" onClick={handleLogOut}>
                  Logout
                </LinkButton> */}
              </li>
            )}
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route exact path="/" element={<SearchBar />} />
          <Route path="/searchResults" element={<SearchResults />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/emission" element={<Emission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
