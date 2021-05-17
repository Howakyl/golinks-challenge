import "./RepoItem.css";
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

  return (
    <li className="repo-list__item">
      <div className="repo-list__info">
        <div>
          <h3>{props.repo.name}</h3>
          <p>{props.repo.description}</p>
        </div>
        <RepoStats repo={props.repo} />
      </div>
      <button onClick={modalHandler} type="button" className="repo-list__button">
        +
      </button>
      <Modal show={modalToggle} close={modalHandler}>
        <Commits repo={props.repo}/>
      </Modal>
    </li>
  );
};

export default RepoItem;
