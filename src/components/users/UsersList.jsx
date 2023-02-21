import React from "react";

import Card from "../UI/Card";

import "./UsersList.css";

const UsersList = ({ users }) => {
  return (
    <Card className={"users"}>
      <ul>
        {users.map((user) => (
          <li key={user.key}>
            {user.username} : {user.age} Years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
