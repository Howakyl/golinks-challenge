import classes from "./Commit.module.css";

const Commit = (props) => {
  return (
    <div className={classes.container}>
      <figure>
        {props.commit.author ? (
          <img
            src={props.commit.author.avatar_url}
            alt=""
            className={classes.avatar}
          />
        ) : (
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github logo"
            className={classes.avatar}
          />
        )}
      </figure>

      <div>
        {props.commit.author != null ? (
          <p>{props.commit.author.login}</p>
        ) : (
          <p>{props.commit.commit.author.name}</p>
        )}
      </div>
    </div>
  );
};

export default Commit;
