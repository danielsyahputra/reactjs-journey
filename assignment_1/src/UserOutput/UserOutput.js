import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{ props.activity }</p>
        </div>
    );
};

export default userOutput;