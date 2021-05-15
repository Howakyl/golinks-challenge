import { useState, useEffect } from "react";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // async function getData() {
  //   const res = await fetch("https://api.github.com/orgs/Netflix/repos", {
  //     headers: {
  //       authorization: process.env.REACT_APP_API_KEY,
  //     },
  //   });
  //   const data = await res.json();
  //   setRepos(data);
  // }

  const getRepos = async () => {
    const res = await fetch("https://api.github.com/orgs/Netflix/repos", {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
      },
    });
    const data = await res.json();
    setRepos(data);
    setLoading(false);
  }
  useEffect(() => {
    getRepos();
  }, [repos]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}

      {!loading && (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Repos;
