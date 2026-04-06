import React, { useState } from "react";
import "./App.css";
export default App;

function App() {
  const [showList, setShowList] = useState(true);

  const [cases, setCases] = useState([
    { id: 1, name: "Ravikumar", crime: "Theft", convicted: true },
    { id: 2, name: "Arun", crime: "Fraud", convicted: false },
    { id: 3, name: "Kumaran", crime: "Robbery", convicted: true },
    { id: 4, name: "Vijay", crime: "Cyber Crime", convicted: false },
    { id: 5, name: "Ajay", crime: "Assault", convicted: true },
  ]);

  const toggleList = () => {
    setShowList(!showList);
  };

  const clearCases = () => {
    setCases([]);
  };

  return (
    <div className="container">
      <h1>Court Case Status </h1>

      <button onClick={toggleList}>
        {showList ? "Hide Cases" : "Show Cases"}
      </button>

      <button onClick={clearCases} style={{ marginLeft: "10px" }}>
        Clear All
      </button>

      {showList ? (
        cases.length > 0 ? (
          <div>
            {cases.map((person) => (
              <div
                key={person.id}
                className={person.convicted ? "convicted" : "notConvicted"}
              >
                <h3>{person.name}</h3>
                <p>Crime: {person.crime}</p>
                <p>
                  Status: {person.convicted ? " Convicted" : " Not Convicted"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty">No Case Data Available </p>
        )
      ) : (
        <p>Case List Hidden</p>
      )}
    </div>
  );
}
