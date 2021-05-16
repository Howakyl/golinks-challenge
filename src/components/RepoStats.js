import './RepoStats.css';

const RepoStats = (props) => {
  return (
    <section className="repo-stats">
      <div className="repo-stats__stars">
        <i className="fas fa-star"></i>
        <span>{props.repo.stargazers_count}</span>
      </div>
      <div className="repo-stats__forks">
        <i className="fas fa-code-branch"></i>
        <span>{props.repo.forks_count}</span>
      </div>
    </section>
  );
};

export default RepoStats;
