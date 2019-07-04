import React from "react";
import Navbar from "../components/Navbar";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./Repositories.css";
import Pagination from "../components/Pagination";

class Repositories extends React.Component {
  state = {
    repos: [],
    numberPage: 1,
  };

  componentDidMount() {
    this.getPage();
  }

  getPage = () => {
    const { match } = this.props;
    const { numberPage } = this.state;

      fetch(`http://localhost:3030/api/users/${match.params.user}/repos/${numberPage}`)
        .then(response => response.json())
        .then(results => this.setState({ repos: results }))
        .catch(error => error);
  };

  previousButton = () => {
    let { numberPage } = this.state;

    if (numberPage > 1) {
      this.setState({ numberPage: numberPage + 1});

      this.getPage();
    }
  };

  nextButton = () => {
    let { numberPage } = this.state;

    this.setState({ numberPage:  numberPage + 1});

    this.getPage();
  };

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
        <Pagination
          urlPrevious={this.previousButton}
          urlNext={this.nextButton}
        />
        {console.log("numberPage: " , this.state.numberPage)}
      </div>
    );
  }
}

export default Repositories;
