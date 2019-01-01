import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  state = {
    clientId: "25dd2e3d6c6805c0c999",
    clientSecret: "61744c19920e132ba1877f3b499243d6349f8737",
    count: 5,
    sort: "created: asc",
    repos: []
  };

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;
    let repoItems = null;
    if (repos.length > 0) {
      repoItems = repos.map(repo => {
        return (
          <div key={repo.id} className="card card-body mb-2">
            <div className="row">
              <div className="col-md-6">
                <h4>
                  <a
                    href="#"
                    className="text-info"
                    onClick={window.open(repo.html_url, "_blank")}
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
              </div>
              <div className="col-md-6">
                <span className="badge badge-info mr-1">
                  Stars: {repo.stargazers_count}
                </span>
                <span className="badge badge-secondary mr-1">
                  Watchers: {repo.watchers_count}
                </span>
                <span className="badge badge-success">
                  Forks: {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
