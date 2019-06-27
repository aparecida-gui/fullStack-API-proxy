import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="navbar-brand" to={"/"}>
          GitHubApp
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/user"}>
          User
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
