import { useState, useEffect } from "react";
import RepoItem from "./RepoItem";
import classes from "./Repos.module.css";

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

  const sortByStars = repos.sort((a, b) =>
    a.stargazers_count > b.stargazers_count ? -1 : 1
  );

  return (
    <div className={classes.container}>
      {loading && <h2 className={classes.loading}>Loading...</h2>}

      {!loading && (
        <div>
        <div className={classes.orgInfo}>
          <img src={repos[0].owner.avatar_url} alt="" className={classes.avatar} />
          <h1 className={classes.orgTitle}>
            {repos[0].owner.login} Repositories:
          </h1>
        </div>
          <ul className={classes.repoList}>
            {sortByStars.map((repo) => (
              <RepoItem repo={repo} key={repo.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Repos;
