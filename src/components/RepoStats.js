import "./RepoStats.css";

const RepoStats = (props) => {
  const date = new Date(props.repo.created_at);
  const day = date.toLocaleString("en-US", { month: "short", day: "2-digit" })
  const year = date.getFullYear();

  return (
    <section className="repo-stats">
      <div>
        <span>{props.repo.language}</span>
      </div>
      <div className="repo-stats__stars">
        <i className="fas fa-star"></i>
        <span>{props.repo.stargazers_count}</span>
      </div>
      <div className="repo-stats__forks">
        <i className="fas fa-code-branch"></i>
        <span>{props.repo.forks_count}</span>
      </div>
      <div>
        <span>Created At: {day}, {year}</span>
      </div>
    </section>
  );
};

export default RepoStats;
