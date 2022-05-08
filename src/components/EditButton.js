import { useState, useContext } from 'react';
import styled from 'styled-components';
import EditForm from './EditForm';
import PortalModal from './PortalModal';

const Button = styled.button`
	${'' /* background-color: ${({ theme }) => theme.colors.green}; */}
	padding: 0.5rem 1rem;
	color: #fff;
`;

const SubmitFormButton = styled.button`
	color: #fff;
`;

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
				<SubmitFormButton form="add-person-form" type="submit">
					Save
				</SubmitFormButton>
			</PortalModal>
		</>
	);
}

export default EditButton;
