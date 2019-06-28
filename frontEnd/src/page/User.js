import React from "react";
import NavbarSearch from "../components/NavBarSearch";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./User.css";
import Moment from "react-moment";

class User extends React.Component {
  state = {
    searchUser: "",
    user: []
  };

  handlerChange = e => {
    const { searchUser } = this.state;
    this.setState({ searchUser: e.target.value });
  };

  search = e => {
    e.preventDefault();
    const { searchUser } = this.state;

    fetch(`http://localhost:3030/api/users/${searchUser}/details`)
      .then(response => response.json())
      .then(results => this.setState({ user: results }));
  };

  render() {
    const { searchUser, user } = this.state;
    return (
      <div>
        <div className="navbar-user">
          <NavbarSearch
            searchUser={searchUser}
            onChange={this.handlerChange}
            onClick={this.search}
          />
        </div>

        {user.length !== 0 ? (
          [user].map(userDetail => (
            <div className="card mb-3 card-user" key={userDetail.id}>
              <img
                className="card-img-top"
                src={userDetail.avatar_url}
                alt={userDetail.name}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{userDetail.name}</h5>
                {userDetail.bio !== null && (
                  <p className="card-text text-sm-left">{userDetail.bio}</p>
                )}
                {userDetail.location !== null && (
                  <p className="card-text text-sm-left">
                    {userDetail.location}
                  </p>
                )}
                <Link
                  to={{ pathname: `https://github.com/${userDetail.login}` }}
                  className="card-text"
                >
                  My GitHub
                </Link>
                <p className="card-text">
                  Number Repositories: {userDetail.public_repos}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Last Update:{" "}
                    <Moment format="DD/MM/YYYY">{userDetail.updated_at}</Moment>
                  </small>
                </p>
                <Button>Repository</Button>
              </div>
            </div>
          ))
        ) : (
          <div className="card w-75 card-explanation">
            <div className="card-body">
              <h5 className="card-title text-center">Como funciona essa página?</h5>
              <p className="card-text text-center">
                Para pesquisar um usuário no GitHub, por favor digite o nome de usuário da pessoa.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default User;
