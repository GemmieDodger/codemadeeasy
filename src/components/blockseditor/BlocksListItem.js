import React from "react";

import Card from "react-bootstrap/Card";

import { Draggable } from "react-beautiful-dnd";

const BlocksListItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Card 
          className="m-1"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card.Body className="background-mid p-1 text-center text-white "><span>{item.content}</span></Card.Body>
          </Card>
        );
      }}
    </Draggable>
  );
};

export default BlocksListItem;
