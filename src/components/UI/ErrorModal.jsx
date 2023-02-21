import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import "./ErrorModal.css";

const Backdrop = () => {
  return <div className="backdrop" onClick={props.onOkay} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return <></>;
};

export default ErrorModal;
