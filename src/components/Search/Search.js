import { useState } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    if (searchInput.length > 0) {
      try {
        const result = await fetch(
          `https://api.github.com/orgs/${searchInput}`,
          {
            headers: {
              'Authorization': `token ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        const data = await result.json();
        props.onGetOrg(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        placeholder="search orgs:"
        onChange={handleChange}
        className={classes.searchInput}
      />
      <button onClick={handleClick} className={classes.searchButton}>
        Search
      </button>
    </div>
  );
};

export default Search;
