import "./RepoItem.css";

const RepoItem = (props) => {
  return (
    <li className="repo-list__item">
      <div className="repo-list__info">
        <h3>{props.repo.name}</h3>
        <small>{props.repo.description}</small>
      </div>
      <button>+</button>
    </li>
  );
};

export default RepoItem;
