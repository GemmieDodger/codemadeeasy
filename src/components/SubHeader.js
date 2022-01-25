import React from "react";

const SubHeader = (props) => {
  let statement = "";
  switch (props.type) {
    case "play":
      statement = `You are playing the ${props.quizName} quiz`;
      break;  
      case "codeeditor":
      statement = "Code Editor";
      break;  
  default:
    statement = `You are editingthe ${props.quizName} quiz`;
  }

  return (
    <h4 className="text-center text-brightest m-2" >
     {statement}
    </h4>
  );
};

export default SubHeader;
