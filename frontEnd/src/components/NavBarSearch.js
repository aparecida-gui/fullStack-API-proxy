import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarSearch = ({ searchUser, onChange, onClick }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="mr-auto">
      <ul className="navbar-nav mr-auto">
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
        <form>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <input
                type="search"
                className="form-control my-2"
                id="inlineFormInput"
                placeholder="Search user"
                value={searchUser}
                onChange={onChange}
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                onClick={onClick}
                className="btn btn-outline-success my-2 my-sm-0"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </ul>
    </div>
  </nav>
);

NavbarSearch.prototype = {
  searchUser: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavbarSearch;