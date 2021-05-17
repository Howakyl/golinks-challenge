import classes from "./CommitLinks.module.css";

const CommitLinks = (props) => {
  const trimmedHash = props.commit.sha.slice(0, 7);

  return (
    <div className={classes.container}>
      <a href={props.commit.html_url} target="_blank" rel="noreferrer" title={props.commit.sha}>
        <button className={classes.hash}>{trimmedHash}</button>
      </a>
    </div>
  );
};

export default CommitLinks;
