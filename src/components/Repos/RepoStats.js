import classes from "./RepoStats.module.css";

const RepoStats = (props) => {
  const date = new Date(props.repo.created_at);
  const day = date.toLocaleString("en-US", { month: "short", day: "2-digit" })
  const year = date.getFullYear();

  return (
    <section className={classes.statsContainer}>
      <div>
        <span>{props.repo.language}</span>
      </div>
      <div className={classes.stars}>
        <i className="fas fa-star"></i>
        <span>{props.repo.stargazers_count}</span>
      </div>
      <div className={classes.forks}>
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
