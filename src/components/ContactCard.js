import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


function ContactCard({item, index, getItemStyle}) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <div
        className="card"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(
          snapshot.isDragging,
          provided.draggableProps.style
        )}
      >
        {item.content}
      </div>
    )}
  </Draggable>
  )
}

export default ContactCard