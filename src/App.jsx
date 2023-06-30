import React, { useState } from "react";
import { puppyList } from "./data.js";

import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log(puppyList);

  return (
    <div className="App">
      <h1>Block 24 Workshop Puppy Pals</h1>

      {puppies.map((puppy) => (
        <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {featPupId && (
        <div className="feature-wrapper">
          <h2>{puppies.find((puppy) => puppy.id === featPupId).name}</h2>
          <ul>
            <li>Age: {puppies.find((puppy) => puppy.id === featPupId).age}</li>
            <li>
              Email: {puppies.find((puppy) => puppy.id === featPupId).email}
            </li>
          </ul>
        </div>
      )}
      
    </div>
  );
  console.log(featPupId);

}

export default App;
