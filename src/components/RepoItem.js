import "./RepoItem.css";

const RepoItem = (props) => {
  return (
    <li className="repo-list__item">
      <div className="repo-list__info">
        <h3>{props.repo.name}</h3>
        <p>{props.repo.description}</p>
        <div className="repo-list_info__stars">
          <i class="fas fa-star"></i>
          <span>{props.repo.stargazers_count}</span>
        </div>
      </div>
      <button>+</button>
    </li>
  );
};

export default RepoItem;
