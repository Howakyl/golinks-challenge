import { useState } from "react";
import classes from "./Search.module.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleClick = () => {
    console.log(searchInput);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="search orgs:" onChange={handleChange}  className={classes.searchInput}/>
      <button onClick={handleClick} className={classes.searchButton}>Search</button>
    </div>
  );
};

export default Search;
