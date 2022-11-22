import React, { useState } from "react";

const Person = (person) => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div className="coordonees">
      <div>
        <div>Nom: {person.lastname}</div>
        <div>Prénom: {person.firstname}</div>
        <div>Age: {person.age}</div>
      </div>
      <div className="interaction">
        <div>
          <button className="btn" onClick={clickHandler}>
            Increment click
          </button>
        </div>
        <div>Clicks : {count}</div>
      </div>
    </div>
  );
};

export default Person;
