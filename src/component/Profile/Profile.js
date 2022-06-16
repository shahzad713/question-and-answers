import React from "react";
import data from "./ProfileData";
import { useState } from "react";

const Profile = () => {
  const [userPrfile, setUserProfile] = useState(data);
  const [search, setsearch] = useState("");

  const handleDeleteProfile = (id) => {
    const newProfileList = userPrfile.filter((index) => index.id !== id);
    setUserProfile(newProfileList);
  };

  return (
    <div className="filtersection">
      <div className="input">
        <input
          type="text"
          placeholder="search profile"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
      </div>
      {userPrfile.filter(value=>{
       if(search===''){
        return value
       }else if(value.Name.includes(search.toLocaleLowerCase())){
        return value
       }
      }).map((profile) => {
        return (
          <div className="imgdiv" key={profile.id}>
            <div>
              <img className="img" src={profile.img} alt={profile.Name} />
            </div>
            <div>
              <h2>Name: {profile.Name}</h2>
              <p>Job : {data.Job}</p>
            </div>
            <div>
              <button onClick={() => handleDeleteProfile(profile.id)}>
                deleteProfile
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
