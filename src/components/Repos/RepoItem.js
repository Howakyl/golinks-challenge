import classes from "./RepoItem.module.css";
import RepoStats from "./RepoStats";
import Modal from "../UI/Modal";
import { useState } from "react";
import Commits from "../Commits/Commits";

const RepoItem = (props) => {
  const [modalToggle, setModalToggle] = useState(false);

  const modalHandler = (e) => {
    e.preventDefault();
    setModalToggle(!modalToggle);
  };

  function trimRepoDescription (repoDesc) {
    if (repoDesc) {
      if (repoDesc.length >= 200) {
        return repoDesc.slice(0,200) + '...'
      }
    }
    return repoDesc;
  }

  return (
    <li className={classes.repoItem}>
      <div className={classes.repoInfo}>
        <div>
          <a
            href={props.repo.html_url}
            target="_blank"
            rel="noreferrer"
            className={classes.repoItemLink}
          >
            <h3>{props.repo.name}</h3>
          </a>
          <p>
            {trimRepoDescription(props.repo.description)}
          </p>
        </div>
        <RepoStats repo={props.repo} />
      </div>
      <button
        onClick={modalHandler}
        type="button"
        className={classes.repoItemButton}
      >
        +
      </button>
      <Modal show={modalToggle} close={modalHandler}>
        <Commits repo={props.repo} />
      </Modal>
    </li>
  );
};

export default RepoItem;
