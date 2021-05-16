import { useState, useEffect } from "react";
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
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}

      {!loading && (
        <div className={classes.commits}>
          {commits.map((commit) => (
            <div key={commit.sha}>
              {commit.author != null ? (
                <p>{commit.author.login}</p>
              ) : (
                <p>{commit.commit.author.name}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Commits;
