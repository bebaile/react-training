import React from "react";

const AddPerson = () => {
  const handleClick = () => {};

  return (
    <div className="add-person">
      <form className="form-person">
        <div className="inputs-add-person">
          <div>
            <label htmlFor="first-name">
              <div>Prénom :</div>
              <div>
                <input type="text" id="first-name"></input>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="last-name">
              <div>Nom :</div>
              <div>
                <input type="text" id="last-name"></input>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="age">
              <div>Age :</div>
              <div>
                <input type="text" id="age"></input>
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
