import React, { useState } from "react";

import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

import "./App.css";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      let newKey = prevUsersList.length;
      return [...prevUsersList, { username: username, age: age, key: newKey }];
    });
  };

  const deleteUser = (key) => {
    console.log("Well somehow", key);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
