import { useState, useEffect } from "react";
import './Repos.css';

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
      {loading && <h2>Loading...</h2>}

      {!loading && (
        <div>
          <h1 className="repo-list__title">{repos[0].owner.login} Repositories:</h1>
          <ul className="repo-list">
            {repos.map((repo) => (
              <li key={repo.id} className="repo-list__item">
                <h3>{repo.name}</h3>
                <button>+</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Repos;
