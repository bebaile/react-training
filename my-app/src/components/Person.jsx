import React, { useContext } from "react";
import favorite from "../assets/favorite.png";
import AddPerson from "./AddPerson";
import VisibleContext from "../contexts/VisibleContext";

const Person = ({ person, index }) => {
  const { handleFavorite, handleLikes, displayModify } =
    useContext(VisibleContext);

  const id = person.firstname + person.lastname;

  return (
    <>
      <div className="coordonees">
        <div>
          <div>Nom: {person.lastname}</div>
          <div>Prénom: {person.firstname}</div>
          <div>Age: {person.age}</div>
        </div>
        <div className="interaction">
          <div>
            <button className="btn" onClick={() => displayModify(index)}>
              <div>Modifier la fiche contact</div>
            </button>
            <button className="btn" onClick={() => handleLikes(index)}>
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
              onClick={() => handleFavorite(index)}
            />
          </div>
        </div>
      </div>
      {person.isVisible ? (
        <div className="modify-person">
          <AddPerson role="modify" person={person} index={index} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Person;
