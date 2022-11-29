import React, { useState } from "react";
import favorite from "../assets/favorite.png";

const Person = ({ person, handleFavorite }) => {
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
            <div>Increment click</div>
          </button>
        </div>
        <div>Clicks : {count}</div>
        <div className="favorite-div">
          <img
            src={favorite}
            alt={`favorite-${count}`}
            className={
              person.favorite === false ? "favorite" : "favorite clicked"
            }
            role="button"
            onClick={handleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default Person;
