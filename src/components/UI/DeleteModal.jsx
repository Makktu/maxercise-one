import React from "react";

import Card from "./Card";
import Button from "./Button";

const DeleteModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onCancel}>
        <Card className="modal">
          <header className="header">
            <h2>Really Delete?</h2>
          </header>
          <div className="content">
            <p>You cannot undo this. Press OK to Delete. Cancel to Cancel.</p>
          </div>
          <footer className="actions">
            <Button theType="cancel">CANCEL</Button>
            <Button theType="okay">OK</Button>
          </footer>
        </Card>
      </div>
    </>
  );
};

export default DeleteModal;
