import { useState, useContext } from 'react';
import styled from 'styled-components';
import AddForm from './AddForm';
import PortalModal from './PortalModal';


const Button = styled.button`
	${'' /* background-color: ${({ theme }) => theme.colors.green}; */}
	padding: 0.5rem 1rem;
	color: #fff;
`;

const SubmitFormButton = styled.button`
	color: #fff;
`

function AddButton() {
	const [isOpen, setIsOpen] = useState(false);


	return (
		<>
			<Button onClick={() => setIsOpen(true)}>+ Person</Button>
			<PortalModal title="Add Contact" isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<AddForm />
				<SubmitFormButton form="add-person-form" type="submit">Save</SubmitFormButton>
			</PortalModal>
		</>
	);
}

export default AddButton;