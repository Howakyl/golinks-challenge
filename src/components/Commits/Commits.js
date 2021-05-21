import { useState, useEffect } from "react";
import Commit from "./Commit";
import classes from "./Commits.module.css";

const Commits = (props) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  const trimmedCommitUrl = props.repo.commits_url.replace("{/sha}", "").trim();

  useEffect(() => {
    const abortController = new AbortController();

    const getCommits = async () => {
      try {
        const res = await fetch(trimmedCommitUrl, {
          headers: {
            'Authorization': `token ${process.env.REACT_APP_API_KEY}`,
          },
          signal: abortController.signal,
        });
        const commitData = await res.json();
        setCommits(commitData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getCommits();

    return () => {
      abortController.abort();
    };
  }, [trimmedCommitUrl]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}

      {commits.message === "Not Found" && (
        <div>
          <h3 className={classes.commitsError}>No Commits found.</h3>
        </div>
      )}

      {!loading && commits.length >= 1 && (
        <div className={classes["commits-container"]}>
          <h3>{props.repo.name} commits:</h3>
          {commits.map((commit) => (
            <Commit commit={commit} key={commit.sha} />
          ))}
        </div>
      )}

      
    </div>
  );
};

export default Commits;
