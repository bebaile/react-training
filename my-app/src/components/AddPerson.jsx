import React, { useState } from "react";

const AddPerson = ({ handleAddPerson }) => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [age, setAge] = useState();

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
    console.log(
      `Nous allons remonter les valeurs suivante : 
        {firstname: ${firstname},
        lastname: ${lastname},
        age: ${age},
      `
    );
    e.preventDefault();
    handleAddPerson([{ firstname: firstname, lastname: lastname, age: age }]);
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
                  onChange={handleLastname}
                ></input>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="age">
              <div>Age :</div>
              <div>
                <input type="text" id="age" onChange={handleAge}></input>
              </div>
            </label>
          </div>
        </div>

        <div>
          <button className="button-5" onClick={handleClick}>
            Ajouter cette personne
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
