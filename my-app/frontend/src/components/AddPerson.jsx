import React, { useContext, useState } from "react";
import VisibleContext from "../contexts/VisibleContext";

const AddPerson = ({ role, person, index }) => {
  const { handleAddPerson } = useContext(VisibleContext);

  const [firstname, setFirstname] = useState(
    role === "modify" ? person.firstname : ""
  );
  const [lastname, setLastname] = useState(
    role === "modify" ? person.lastname : ""
  );
  const [age, setAge] = useState(role === "modify" ? person.age : "");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleAddPerson(
      [
        {
          firstname: firstname,
          lastname: lastname,
          age: age,
          favorite: false,
          likes: 0,
        },
      ],
      role,
      index
    );
    const refresh = document.querySelectorAll("input");
    for (let i = 0; i < refresh.length; i++) {
      refresh[i].value = "";
    }
  };

  return (
    <div className="add-person">
      <form className="form-person">
        <div className="inputs-add-person">
          <div>
            <label htmlFor="first-name">
              <div>Prénom :</div>
              <div>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Margot"
                  defaultValue={role === "modify" ? person.firstname : ""}
                  onChange={handleFirstname}
                ></input>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="last-name">
              <div>Nom :</div>
              <div>
                <input
                  type="text"
                  id="last-name"
                  defaultValue={role === "modify" ? person.lastname : ""}
                  onChange={handleLastname}
                ></input>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="age">
              <div>Age :</div>
              <div>
                <input
                  type="text"
                  id="age"
                  defaultValue={role === "modify" ? person.age : ""}
                  onChange={handleAge}
                ></input>
              </div>
            </label>
          </div>
        </div>

        <div>
          <button className="button-5" onClick={handleClick}>
            {role === "modify" ? "Modifier" : "Ajouter cette personne"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
