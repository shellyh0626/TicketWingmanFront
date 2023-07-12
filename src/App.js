import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-dark p-3 bg-danger">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link mx-2 active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/profile" class="nav-link mx-2">
                User Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="nav-link mx-2">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signup" class="nav-link mx-2">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
