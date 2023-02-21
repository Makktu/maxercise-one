import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import "./UsersList.css";

const UsersList = ({ users }) => {
  const [userList, updateUserList] = useState([]);

  const deleteUser = (user) => {
    let userIndex = users.indexOf(user);
    users.splice(userIndex, 1);
    updateUserList((prevList) => {
      return [...prevList, ...users];
    });
  };

  return (
    <Card className={"users"}>
      <ul>
        {users.map((user) => (
          <li key={user.key}>
            {user.username} : {user.age} Years old
            <Button theType="delete-user" onClick={() => deleteUser(user)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
