import React from "react";
import DisplayPerson from "../components/DisplayPerson";
import AddPerson from "../components/AddPerson";
import Synthesis from "../components/Synthesis.jsx";

const Contacts = () => {
  return (
    <div className="contacts">
      <DisplayPerson />
      <AddPerson role="add" />
      <Synthesis />
    </div>
  );
};

export default Contacts;
