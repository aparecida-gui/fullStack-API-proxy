import React from "react";
import { Link } from "react-router-dom";

const NavbarSearch = ({searchUser , onChange, onClick}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="mr-auto mt-2 mt-lg-0">
      <ul className="navbar-nav">
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
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search user"
          value={searchUser}
          onChange={onChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" 
          type="submit" onClick={onClick}>Search
        </button>
      </form>
    </div>
  </nav>
);

export default NavbarSearch;
