import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{ props.activity }</p>
            <p>Level of Priority: { props.priority }</p>
        </div>
    );
};

export default userOutput;