import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import PortalModal from './PortalModal';
import { IoBusinessOutline } from 'react-icons/io5';
import Avatar from './Avatar';
import ContactDetails from './ContactDetails';


const Card = styled.li`
	border: 1px solid lightgrey;
	border-radius: 5px;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem 0;
`;

const CardInfo = styled.div`
	h2 {
		font-size: 1.2rem;
		margin-bottom: 0.4rem;
	}
	p {
		font-weight: 300;
	}
`;

function ContactCard({ contact, index, getItemStyle }) {
	const [isOpen, setIsOpen] = useState(false)


	return (
		<>
			<Draggable key={contact.id} draggableId={contact.id.toString()} index={index}>
				{(provided, snapshot) => (
					<Card
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
						onClick={() => setIsOpen(true)}
					>
						<CardInfo>
							<h2>{contact.name}</h2>
							<IoBusinessOutline /> <span>{contact.org_name}</span>
						</CardInfo>
						<Avatar width="60px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" />
					</Card>
				)}
			</Draggable>
			<PortalModal title="Personal Information" isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<ContactDetails contact={contact} />
			</PortalModal>
		</>
	);
}

export default ContactCard;
