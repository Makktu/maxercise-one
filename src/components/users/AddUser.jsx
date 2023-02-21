import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import "./AddUser.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "You must fill everything in !",
        message: "Please enter a valid name and age (greater than 0)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Not a valid age!",
        message: "Please enter a valid name and age (greater than 0)",
      });
      return;
    }

    // if user enters name with a lowercase first letter, this capitalises
    let fixedUsername =
      enteredUsername[0].toUpperCase() + enteredUsername.slice(1);

    props.onAddUser(fixedUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = () => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = () => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onOkay={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      ;
      <Card>
        <div className="form-container">
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
            <Button
              type="submit"
              theType="submit-btn"
              onClick={props.addUserHandler}
            >
              Add User
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default AddUser;
