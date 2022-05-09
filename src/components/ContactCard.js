import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import PortalModal from './PortalModal';
import { IoBusinessOutline } from 'react-icons/io5';
import Avatar from './Avatar';
import ContactDetails from './ContactDetails';
import DeleteButton from './DeleteButton';
import EditForm from './EditForm';
import Button from './Styled/Button.styled';

const Card = styled.li`
	border: 1px solid lightgrey;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	margin-bottom: 1rem;
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
	const [isOpen, setIsOpen] = useState(false);
	const [hideEdit, setHideEdit] = useState(true);
	const hasPicture = contact.picture_id ? true : false;

	let initials;
	if (contact.last_name && contact.first_name) {
		initials = (contact.first_name[0] + contact.last_name[0]).toUpperCase();
	} else if (contact.first_name) {
		initials = (contact.first_name[0] + contact.first_name[1]).toUpperCase();
	}

	const closeModal = () => {
		setHideEdit(true);
		setIsOpen(false);
	};

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
						<Avatar width="60px" src={hasPicture ? contact.picture_id.pictures[128] : ''} initials={initials} />
					</Card>
				)}
			</Draggable>

			{hideEdit ? (
				<PortalModal title="Personal Information" footerFlow="row-reverse" isOpen={isOpen} closeModal={() => setIsOpen(false)}>
					<ContactDetails initials={initials} hasPicture={hasPicture} contact={contact} />
					<div>
						<DeleteButton personId={contact.id} closeModal={() => setIsOpen(false)} />
						<Button
							color="grey"
							bgColor="white"
							ml=".5rem"
							onClick={() => {
								setHideEdit(false);
							}}
							closeModal={() => setIsOpen(false)}
						>
							Edit
						</Button>
					</div>
				</PortalModal>
			) : (
				<PortalModal title="Edit Contact" setHideEdit={setHideEdit} isOpen={isOpen} closeModal={closeModal}>
					<EditForm person={contact} closeModal={() => setIsOpen(false)} />
					<Button form="edit-person-form" type="submit">
						Save
					</Button>
				</PortalModal>
			)}
		</>
	);
}

export default ContactCard;
