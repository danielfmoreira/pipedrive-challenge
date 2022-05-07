import styled from 'styled-components';
import { useState } from 'react';

const Input = styled.input``;

const SubmitBtn = styled.button`
	background-color: ${({ theme }) => theme.colors.blue};;
`;
const Form = styled.form`
	padding: 1rem;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;

const Row = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 0.5rem;
`;

function AddForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [groups, setGroups] = useState('');
	const [location, setLocation] = useState('');
	const [assistant, setAssistant] = useState('');
	const [organization, setOrganization] = useState('');
	const [errorMessage, setErrorMessage] = '';

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		} catch (error) {
			setErrorMessage('Something went wrong. Try again');
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
					<Input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</Row>
				<Input type="tel" placeholder="Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
				<Input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<Input type="text" placeholder="Groups" name="groups" value={groups} onChange={(e) => setGroups(e.target.value)} />
				<Input type="text" placeholder="Location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
				<Input type="text" placeholder="Assistant" name="assistant" value={assistant} onChange={(e) => setAssistant(e.target.value)} />
				<Input type="text" placeholder="Organization" name="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />
				<SubmitBtn type="submit">Add New</SubmitBtn>
				{errorMessage && <p>{errorMessage}</p>}
			</Form>
		</>
	);
}

export default AddForm;
