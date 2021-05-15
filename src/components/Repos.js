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
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id} className="repo-list__item">
              <h3>{repo.name}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Repos;
