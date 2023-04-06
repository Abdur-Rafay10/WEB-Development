import React, { useState } from 'react';
import './As2.css';
function GitHubUserSearch() 
{
  const [searchTerm, setSearchTerm] = useState("");
  const [userProfiles, setUserProfiles] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = () => {
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setUserProfiles(data.items);
      });
  };

  return (
    <div className="mydiv1">
        <h1 className="h" >This is GitHub Profile Search Engine!</h1>
        <label  className="mylabel"><b>Please Enter a Name Below to Search For:</b></label>
        <br></br>
        <br></br>
       <input className="text" type="text" value={searchTerm} onChange={handleInputChange} placeholder="Enter Profile Name" />
      <button className="b" onClick={fetchData}>Search</button>
      <ul>
        {userProfiles.map((profile) => (
          <li key={profile.id}>
            <a href={profile.html_url}>
              <img src={profile.avatar_url} alt={`${profile.login} avatar`} />
              {profile.login}
            </a>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default GitHubUserSearch;