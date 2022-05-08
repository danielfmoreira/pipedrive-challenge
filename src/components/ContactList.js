import { useContext } from 'react'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ContactCard from './ContactCard';
import styled from 'styled-components';
import { ContactListContext } from '../context/ContactList.context';


const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};

const ListContainer = styled.ul`
	padding: 0 5px;
	list-style: none;
`;

function ContactList() {
  const { contacts } = useContext(ContactListContext)
	const { setContacts } = useContext(ContactListContext)

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        padding: "1rem",
        margin: "1rem",
        background: isDragging ? "rgb(220,220,220)" : "white",
        ...draggableStyle,
      });
      
      const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? "white" : "white",
        padding: "16px",
      }); 

      const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
    
        const reorderedItems = reorder(contacts, result.source.index, result.destination.index);
        setContacts(reorderedItems);
      };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <ListContainer
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
        {contacts.map((contact, index) => (
          <ContactCard key={`${contact}-${index}`} index={index} contact={contact} getItemStyle={getItemStyle}/>
        ))}
        {provided.placeholder}
      </ListContainer>
    )}
  </Droppable>
  </DragDropContext>
  )
}

export default ContactList