import React from "react";
import "./UserError.css";

const UserError = (props) => {
  return (
    <div className="error-body">
      <i class="left-icon frown outline icon massive"></i>
      <div className="error-message">
        <i className="massive location arrow icon"></i>
        <h3>{props.message}</h3>
      </div>
      <i class="right-icon frown outline icon massive"></i>
    </div>
  );
};

export default UserError;
