import { useState } from 'react';
import styled from 'styled-components';
import AddForm from './AddForm';
import PortalModal from './PortalModal';

const Button = styled.button`
	background-color: blue;
	padding: 0.5rem 1rem;
`;

function AddButton() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Add Contact</Button>
			<PortalModal isOpen={isOpen} onClose={() => setIsOpen(false)}><AddForm /></PortalModal>
		</>
	);
}

export default AddButton;
