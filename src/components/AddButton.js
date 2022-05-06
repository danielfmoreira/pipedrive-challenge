import { useState } from 'react';
import styled from 'styled-components';
import AddForm from './AddForm';

const Button = styled.button`
	background-color: blue;
	padding: 0.5rem 1rem;
`;

function AddButton() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};

	return (
		<>
			<Button onClick={handleClick}>Add Contact</Button>
			<AddForm showModal={showModal} setShowModal={setShowModal} />
		</>
	);
}

export default AddButton;
