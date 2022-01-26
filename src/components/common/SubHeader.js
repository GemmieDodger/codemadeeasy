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
    case "blockseditor":
      statement = "Blocks Code Editor";
      break;
    case "codeplay":
      statement = "Choose your level for code play?";
      break;
    case "choosequiz":
      statement = "Choose your quiz?";
      break;
    case "admin":
      statement = "Admin";
      break;
    default:
      statement = `You are editing the ${props.quizName} quiz`;
  }

  return <h4 className="text-center text-brightest mt-5">{statement}</h4>;
};

export default SubHeader;
