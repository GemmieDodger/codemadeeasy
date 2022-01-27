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
    case "landing":
      statement = "Choose your level for code play?";
      break;
      case "showScore":
        statement = "Now you've learnt the skills, practice with some code play?";
        break;
    case "choosequiz":
      statement = "Choose your quiz?";
      break;
    case "admin":
      statement = "Admin";
      break;
      case "edit":
        statement = `You are editing the ${props.quizName} quiz`;
        break;
    default:
      statement = `Welcome!`;
  }

  return <h4 className="text-center text-brightest mt-5">{statement}</h4>;
};

export default SubHeader;
