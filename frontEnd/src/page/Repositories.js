import React from "react";
import Navbar from "../components/Navbar";

class Repositories extends React.Component {
  state = {
    repos: []
  };

  componentDidMount() {
    const { match } = this.props;

    fetch(`http://localhost:3030/api/users/${match.params.user}/repos`)
      .then(response => response.json())
      .then(results => this.setState({ repos: results }))
      .catch(error => error);
  }

  render() {
    return (
      <div>
        <Navbar />
        Repositories
      </div>
    );
  }
}

export default Repositories;
