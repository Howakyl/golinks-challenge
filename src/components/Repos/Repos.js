import { useState, useEffect } from "react";
import OrgInfo from "../Orgs/OrgInfo";
import RepoItem from "./RepoItem";
import classes from "./Repos.module.css";

const Repos = (props) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getRepos = async () => {
      setLoading(true);

      try {
        const res = await fetch(props.organization.repos_url, {
          headers: {
            'Authorization': `token ${process.env.REACT_APP_API_KEY}`,
          },
          signal: abortController.signal,
        });
        const data = await res.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getRepos();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line
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
          <OrgInfo org={repos[0]} />
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
