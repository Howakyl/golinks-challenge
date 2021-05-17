import { useState, useEffect } from "react";
import Commit from './Commit';
import classes from "./Commits.module.css";

const Commits = (props) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  const trimmedCommitUrl = props.repo.commits_url.replace("{/sha}", "").trim();

  const getCommits = async () => {
    const res = await fetch(trimmedCommitUrl, {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
      },
    });
    const commitData = await res.json();
    setCommits(commitData);
    setLoading(false);
  };

  useEffect(() => {
    getCommits();
  });

  return (
    <div>
      {loading && <h2>Loading...</h2>}

      {!loading && (
        <div className={classes['commits-container']}>
          {commits.map((commit) => (
            <Commit commit={commit}  key={commit.sha}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Commits;
