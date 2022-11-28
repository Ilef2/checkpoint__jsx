import React from "react";
import "./FullName.css"

function FullName() {
  let firstName = "ilef";
  let lastName = "dimassi";

  return (
    <div className="text">
      
        <h4 className="full">FullName:</h4>
       <h5>{firstName}
        {lastName}</h5> 
     
    </div>
  );
}

export default FullName;
