import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import DeleteModal from "../UI/DeleteModal";

import "./UsersList.css";

const UsersList = ({ users }) => {
  const [userList, updateUserList] = useState([]);
  const [deleteChoice, updateDeleteChoice] = useState(false);

  const deleteUser = (user) => {
    // TODO: A "Confirm Delete" dialog/modal
    let userIndex = users.indexOf(user);
    users.splice(userIndex, 1);
    updateUserList((prevList) => {
      return [...prevList, ...users];
    });
  };

  const deleteHandler = (user) => {
    updateDeleteChoice(!deleteChoice);
    // if (deleteChoice) deleteUser(user);
  };

  return (
    <>
      {deleteChoice && <DeleteModal />}
      <Card className={"users"}>
        <ul>
          {users.map((user) => (
            <li key={user.key}>
              {user.username} : {user.age} Years old
              <Button theType="delete-user" onClick={() => deleteHandler(user)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
