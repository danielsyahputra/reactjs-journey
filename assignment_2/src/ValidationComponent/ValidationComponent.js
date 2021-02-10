import React from "react";
import "./ValidationComponent.css"

const validationComponent = (props) => {
  return (
    <div className="ValidationComponent">
      <p>Input anda : {props.input.join('')}</p>
      <p>Panjang input yang anda masukkan : {props.length}</p>
      <p>{ (props.isTooShort) ? "Text too short!" : "Text long enough" }</p>
    </div>
  );
};

export default validationComponent;
