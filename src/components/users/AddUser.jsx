import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import "./AddUser.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "You must fill everything in !",
        message: "Please enter a valid name and age (greater than 0)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Not a valid age!",
        message: "Please enter a valid name and age (greater than 0)",
      });
      return;
    }

    // if user enters name with a lowercase first letter, this capitalises
    let fixedUsername = enteredName[0].toUpperCase() + enteredName.slice(1);

    props.onAddUser(fixedUsername, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onOkay={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card>
        <div className="form-container">
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef} />
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
    </>
  );
};

export default AddUser;
