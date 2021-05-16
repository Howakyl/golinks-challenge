import "./RepoItem.css";
import RepoStats from "./RepoStats";

const RepoItem = (props) => {
  return (
    <li className="repo-list__item">
      <div className="repo-list__info">
        <div>
          <h3>{props.repo.name}</h3>
          <p>{props.repo.description}</p>
        </div>
        <RepoStats repo={props.repo}/>
      </div>
      <button>+</button>
    </li>
  );
};

export default RepoItem;
