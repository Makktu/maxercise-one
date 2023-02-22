import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import DeleteModal from "../UI/DeleteModal";

import "./UsersList.css";

const UsersList = ({ users }) => {
  let confirmDeleteUser; // this variable to be used in the dlete confirmation dialog
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

  const deleteIsCancelled = () => {
    updateDeleteChoice(false);
  };

  const deleteHandler = (user) => {
    // console.log(confirmDeleteUser);
    // console.log("⇢", confirmDeleteUser);
    // console.log(confirmDeleteUser);
    updateDeleteChoice(true);
  };

  return (
    // TODO ⇢ fix confirm delete, as confirming delete does not currently work. It always deletes the last User to be created.
    <>
      {deleteChoice && (
        <DeleteModal
          onCancel={deleteIsCancelled}
          onOkay={(confirmDeleteUser) => {
            console.log(confirmDeleteUser);
            deleteUser(confirmDeleteUser);
          }}
        />
      )}
      <Card className={"users"}>
        <ul>
          {users.map((user) => (
            <li key={user.key}>
              {user.username} ⇢ {user.age} Years old
              <Button
                theType="delete-user"
                onClick={() => {
                  console.log(user);
                  confirmDeleteUser = user;
                  deleteHandler(confirmDeleteUser);
                }}
              >
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
