import { useState, useEffect } from "react";
import RepoItem from "./RepoItem";
import classes from "./Repos.module.css";

const Repos = (props) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRepos = async () => {
    setLoading(true);

    try {
      const res = await fetch(props.organization.repos_url, {
        headers: {
          authorization: process.env.REACT_APP_API_KEY,
        },
      });
      const data = await res.json();
      setRepos(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    getRepos();
  }, [props.organization.repos_url]);

  const sortByStars = repos.sort((a, b) =>
    a.stargazers_count > b.stargazers_count ? -1 : 1
  );

  return (
    <div className={classes.container}>
      {props.organization.message === "Not Found" && (
        <h2 className={classes.loading}>Organization Not Found :(</h2>
      )}
      {loading && <h2 className={classes.loading}>Loading...</h2>}

      {!loading && props.organization.message !== "Not Found" && (
        <div>
          <div className={classes.orgInfo}>
            <a href={repos[0].owner.html_url} target="_blank" rel="noreferrer">
              <img
                src={repos[0].owner.avatar_url}
                alt=""
                className={classes.avatar}
              />
            </a>
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
