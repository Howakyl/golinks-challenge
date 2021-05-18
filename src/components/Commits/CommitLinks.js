import classes from "./CommitLinks.module.css";

const CommitLinks = (props) => {
  const trimmedHash = props.commit.sha.slice(0, 7);

  const date = new Date(props.commit.commit.author.date);
  const day = date.toLocaleString("en-US", { month: "short", day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div>
      <span className={classes.date}>
        Created on: {day} {year}
      </span>
      <div className={classes.container}>
        <a
          href={props.commit.html_url}
          target="_blank"
          rel="noreferrer"
          title={props.commit.sha}
        >
          <button className={classes.hash}>{trimmedHash}</button>
        </a>
      </div>
    </div>
  );
};

export default CommitLinks;
