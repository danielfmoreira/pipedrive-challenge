import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ContactCard from './ContactCard';

const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};


function ContactList({items, setItems}) {

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

      const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
    
        const reorderedItems = reorder(items, result.source.index, result.destination.index);
        setItems(reorderedItems);
      };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
        {items.map((item, index) => (
          <ContactCard key={`${item}-${index}`} index={index} item={item} getItemStyle={getItemStyle}/>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
  </DragDropContext>
  )
}

export default ContactList