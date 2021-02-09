import React from "react"
import "./UserInput.css";

const userInput = (props) => {
    return (
        <div className="UserInput">
            <label>Enter an Input: </label>
            <input name="input" type="text" onChange={ props.changed }/>
        </div>
    );
}

export default userInput;