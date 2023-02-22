import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import Backdrop from "./ModalBackdrop";

import "./ErrorModal.css";

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
        <Button onClick={props.onOkay}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onOkay={props.onOkay}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
