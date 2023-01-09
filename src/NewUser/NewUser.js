import React, { useState } from "react";
import { useAddUsersData } from "../Components/Users";
import "./NewUser.css";

const NewUser = () => {
  const { mutate } = useAddUsersData();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const addNewUser = () => {
    const data = { name, number };
    mutate(data);
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="number"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button className="addUser" onClick={addNewUser}>
        Add user
      </button>
    </div>
  );
};

export default NewUser;
