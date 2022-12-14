import React, { useContext } from "react";
import VisibleContext from "../contexts/VisibleContext";

const Synthesis = () => {
  const { persons } = useContext(VisibleContext);
  const favoriteCounter = persons.filter((person) => person.favorite === true)
    .length;

  const likeCounter = persons.reduce(
    (acc, currentValue) => acc + currentValue.likes,
    0
  );

  return (
    <div className="synthesis">
      <div>Nombre de personnes mises en favoris : {favoriteCounter}</div>
      <div>Nombre de likes : {likeCounter}</div>
    </div>
  );
};

export default Synthesis;
