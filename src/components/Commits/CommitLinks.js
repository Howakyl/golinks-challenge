import classes from "./CommitLinks.module.css";

const CommitLinks = (props) => {
  
    const trimmedHash = props.commit.sha.slice(0, 7);


  return (
    <div className={classes.container}>
      <button className={classes.code}><i className="fas fa-code"></i></button>
      <button className={classes.hash}>{trimmedHash}</button>
    </div>
  );
};

export default CommitLinks;
