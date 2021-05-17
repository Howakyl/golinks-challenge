import classes from "./Commit.module.css";

const Commit = (props) => {
  return (
    <div>
      {props.commit.author != null ? (
        <p>{props.commit.author.login}</p>
      ) : (
        <p>{props.commit.commit.author.name}</p>
      )}
    </div>
  );
};

export default Commit;
