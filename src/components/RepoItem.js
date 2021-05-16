import "./RepoItem.css";

const RepoItem = (props) => {
  return (
    <li className="repo-list__item">
      <div className="repo-list__info">
        <div>
          <h3>{props.repo.name}</h3>
          <p>{props.repo.description}</p>
        </div>
        <section className="repo-list_stats">
          <div className="repo-list__info__stars">
            <i className="fas fa-star"></i>
            <span>{props.repo.stargazers_count}</span>
          </div>
          <div className="repo-list__info__forks">
            <i className="fas fa-code-branch"></i>
            <span>{props.repo.forks_count}</span>
          </div>
        </section>
      </div>
      <button>+</button>
    </li>
  );
};

export default RepoItem;
