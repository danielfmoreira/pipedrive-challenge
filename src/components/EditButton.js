import { useState, useContext } from 'react';
import EditForm from './EditForm';
import PortalModal from './PortalModal';
import Button from './Styled/Button.styled';

function EditButton({ person, setPreviousOpen }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setPreviousOpen(false);
		setIsOpen(true);
	};

	return (
		<>
			<Button onClick={handleClick}>Edit</Button>
			<PortalModal title="Edit Contact" isOpen={isOpen} closeModal={() => setIsOpen(false)}>
				<EditForm person={person} closeModal={() => setIsOpen(false)} />
				<Button form="edit-person-form" type="submit">Save</Button>
			</PortalModal>
		</>
	);
}

export default EditButton;
