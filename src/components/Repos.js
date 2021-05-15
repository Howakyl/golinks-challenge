import { useState, useEffect } from "react";
import RepoItem from "./RepoItem";
import "./Repos.css";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRepos = async () => {
    const res = await fetch("https://api.github.com/orgs/Netflix/repos", {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
      },
    });
    const data = await res.json();
    setRepos(data);
    setLoading(false);
  };
  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div>
      {loading && <h2 className="loading">Loading...</h2>}

      {!loading && (
        <div>
          <h1 className="repo-list__title">
            {repos[0].owner.login} Repositories:
          </h1>
          <ul className="repo-list">
            {repos.map((repo) => (
              <RepoItem repo={repo} key={repo.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Repos;
