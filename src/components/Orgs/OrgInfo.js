import classes from "./OrgInfo.module.css";

const OrgInfo = (props) => {
  return (
    <div className={classes.orgInfo}>
      <a href={props.org.owner.html_url} target="_blank" rel="noreferrer">
        <img
          src={props.org.owner.avatar_url}
          alt=""
          className={classes.avatar}
        />
      </a>
      <h1 className={classes.orgTitle}>
        {props.org.owner.login} Repositories:
      </h1>
    </div>
  );
};

export default OrgInfo;
