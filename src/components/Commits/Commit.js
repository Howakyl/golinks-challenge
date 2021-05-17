import classes from "./Commit.module.css";

const Commit = (props) => {
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>{props.commit.commit.message}</h4>
      <div className={classes.userContainer}>
        {props.commit.author ? (
          <img
            src={props.commit.author.avatar_url}
            alt="user avatar"
            className={classes.avatar}
          />
        ) : (
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github logo"
            className={classes.avatar}
          />
        )}
        <div>
          {props.commit.author != null ? (
            <p>{props.commit.author.login}</p>
          ) : (
            <p>{props.commit.commit.author.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Commit;
