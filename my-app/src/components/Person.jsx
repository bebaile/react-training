import React from "react";
import favorite from "../assets/favorite.png";

const Person = ({ person, handleFavorite, handleLikes }) => {
  // const [count, setCount] = useState(0);

  // const clickHandler = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className="coordonees">
      <div>
        <div>Nom: {person.lastname}</div>
        <div>Prénom: {person.firstname}</div>
        <div>Age: {person.age}</div>
      </div>
      <div className="interaction">
        <div>
          <button className="btn" onClick={handleLikes}>
            <div>Increment likes</div>
          </button>
        </div>
        <div>Likes : {person.likes}</div>
        <div className="favorite-div">
          <img
            src={favorite}
            alt={`favorite`}
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
