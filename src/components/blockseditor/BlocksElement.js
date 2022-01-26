import React from "react";

import { Droppable } from "react-beautiful-dnd";
import BlocksListItem from "./BlocksListItem";

const BlocksElement = ({ title, prefix, elements }) => {
  return(
  <>
  <h6 className="mt-2 text-white">{title}</h6>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div className="border border-white bg-editor" {...provided.droppableProps} ref={provided.innerRef}>

          {elements.map((item, index) => {
            return (
            <BlocksListItem key={item.id} item={item} index={index} />
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </>
  )
};

export default BlocksElement;