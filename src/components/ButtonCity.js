import React from "react";
import { Button } from "react-bootstrap";

function AddComm({ onChanged, value }) {
  function apply() {
    onChanged(value);
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={apply}>
        {value}
      </Button>{" "}
    </>
  );
}

export default AddComm;
