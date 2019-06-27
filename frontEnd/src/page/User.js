import React from "react";
import NavbarSearch from "../components/NavBarSearch";
import Button from "../components/Button";

class User extends React.Component {
  state = {
    searchUser: "",
    user: []
  };

  handlerChange = e => {
    const { searchUser } = this.state;
    this.setState({ searchUser: e.target.value });
    console.log(searchUser);
  };

  search = e => {
    e.preventDefault();
    const { searchUser } = this.state;

    fetch(`http://localhost:3030/api/users/${searchUser}/details`)
      .then(response => response.json())
      .then(results => this.setState({user: results}));
  };

  render() {
    const { searchUser, user } = this.state;
    return (
      <div>
        <NavbarSearch
          searchUser={searchUser}
          onChange={this.handlerChange}
          onClick={this.search}
        />
        <div className="card mb-3">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <Button>Repository</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
