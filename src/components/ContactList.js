import { useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ContactCard from './ContactCard';
import styled from 'styled-components';
import { ContactListContext } from '../context/contacts.context';

const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};

const ListContainer = styled.ul`
	list-style: none;
	padding: 0;
`;

function ContactList() {
	const { contacts, setContacts } = useContext(ContactListContext);
	const hasContacts = contacts.length > 0 ? true : false;

	const getItemStyle = (isDragging, draggableStyle) => ({
		userSelect: 'none',
		background: isDragging ? 'rgb(220,220,220)' : 'white',
		...draggableStyle,
	});

	const getListStyle = (isDraggingOver) => ({
		background: isDraggingOver ? 'white' : 'white',
	});

	const onDragEnd = (result) => {
		if (!result.destination) {
			return;
		}

		const reorderedItems = reorder(contacts, result.source.index, result.destination.index);
		setContacts(reorderedItems);
	};

	return (
		<>
			{hasContacts ? (
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="droppable">
						{(provided, snapshot) => (
							<ListContainer {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
								{contacts.map((contact, index) => (
									<ContactCard key={`${contact}-${index}`} index={index} contact={contact} getItemStyle={getItemStyle} />
								))}
								{provided.placeholder}
							</ListContainer>
						)}
					</Droppable>
				</DragDropContext>
			) : (
				<>No Contact</>
			)}
		</>
	);
}

export default ContactList;
