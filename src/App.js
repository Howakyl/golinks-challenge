import { useState } from "react";
import "./App.css";
import Repos from "./components/Repos/Repos";
import Search from "./components/Search/Search";

function App() {
  const [organization, setOrganization] = useState({});
  const [loading, setLoading] = useState(true);

  const getOrg = (org) => {
    setOrganization(org);
    setLoading(false);
  }

  console.log( 'IN APP.js', organization)
  return (
    <div>
      <Search onGetOrg={getOrg}/>
      {loading && (
        <h2>Search for an organization!</h2>
      )}
      {!loading && (

      <Repos organization={organization}/>
      )}
      
    </div>
  );
}

export default App;
