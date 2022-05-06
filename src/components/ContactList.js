import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ContactCard from './ContactCard';


function ContactList({items}) {

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        padding: "16px",
        margin: `0 0 16 0`,
        background: isDragging ? "lightgreen" : "grey",
        ...draggableStyle,
      });
      
      const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: "16px",
        width: 250,
      }); 


  return (
    <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
        {items.map((item, index) => (
          <ContactCard index={index} item={item} getItemStyle={getItemStyle}/>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
  )
}

export default ContactList