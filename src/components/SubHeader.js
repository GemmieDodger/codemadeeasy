import React from "react";

const SubHeader = (props) => {
  let statement = "";
  switch (props.type) {
    case "play":
      statement = "playing";
      break;  
  default:
    statement = "editing";
  }

  return (
    <h4 className="text-center text-brightest" variant="quizAlign">
      You are {statement} the {props.quizName} quiz
    </h4>
  );
};

export default SubHeader;
