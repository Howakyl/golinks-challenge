import "./RepoItem.css";

const RepoItem = (props) => {
  return (
      <li className="repo-list__item">
        <h3>{props.repo.name}</h3>
        <button>+</button>
      </li>
  );
};

export default RepoItem;
