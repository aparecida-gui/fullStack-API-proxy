import React from "react";
import Navbar from "../components/Navbar";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./Repositories.css";

class Repositories extends React.Component {
  state = {
    repos: []
  };

  componentDidMount() {
    const { match } = this.props;
    let numberPage = 3;

    fetch(`http://localhost:3030/api/users/${match.params.user}/repos/${numberPage}`)
      .then(response => response.json())
      .then(results => this.setState({ repos: results }))
      .catch(error => error);
  }

  render() {
    const { repos } = this.state;
    const { match } = this.props;
    return (
      <div>
        <Navbar />
        {repos.map(repo => (
          <div className="card card-repos" key={repo.id}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={{
                pathname: `https://github.com/${match.params.user}/${repo.name}`
              }}
            >
              <h5 className="card-header">{repo.name}</h5>
            </Link>
            <div className="card-body">
              <p className="card-text">{repo.description}</p>
              <p className="card-text">{repo.language}</p>
              <p className="card-text">
                <small className="text-muted">
                  Created Repository:
                  <Moment format=" DD/MM/YYYY">{repo.created_at}</Moment>
                </small>
                <small className="text-muted">
                  Last Update:
                  <Moment format=" DD/MM/YYYY">{repo.updated_at}</Moment>
                </small>
              </p>
              <div />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Repositories;
