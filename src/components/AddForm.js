import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const Input = styled.input`
	height: 2rem;
	padding: 1rem;
`;

const Form = styled.form`
	width: 100%;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 3fr;
	grid-rows: auto;

	input {
		height: 2rem;
		padding: 1rem;
	}
`;

const Label = styled.p`
	text-align: right;
	font-weight: 600;
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
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const name = `${firstName} ${lastName}`;

			// Create a organization and add location
			const newOrganization = await axios.post(`${API_URL}/organizations?api_token=${KEY}`, {
				name: organization,
			});

			const orgId = newOrganization.data.data.id;

			const updated = await axios.put(`${API_URL}/organizations/${orgId}?api_token=${KEY}`, {
				address: location,
			});

			// Create a person
			const newPerson = {
				name: name,
				email: [
					{
						value: email,
						primary: true,
						label: 'work',
					},
				],
				phone: [
					{
						value: phone,
						primary: true,
						label: 'work',
					},
				],
				org_id: orgId,
				ead969773b1c36b82991c53b93516ee07556666e: assistant,
				e17b7fccc25fc6a50263ba9421b9d0089b78ab86: groups,
			};

			await axios.post(`${API_URL}/persons?api_token=${KEY}`, newPerson);

			//Clear the form
			setFirstName('');
			setLastName('');
			setPhone('');
			setEmail('');
			setOrganization('');
			setAssistant('');
			setGroups('');
			setLocation('');

			//Close Dialog
			
		} catch (error) {
			console.log(error);
			setErrorMessage('Something went wrong. Try again');
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Label>Name:</Label>
				<Row>
					<Input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
					<Input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</Row>

				<Label>Phone:</Label>
				<Input type="tel" placeholder="Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

				<Label>Email:</Label>
				<Input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

				<Label>Organization:</Label>
				<Input type="text" placeholder="Organization" name="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />

				<Label>Assistant:</Label>
				<Input type="text" placeholder="Assistant" name="assistant" value={assistant} onChange={(e) => setAssistant(e.target.value)} />

				<Label>Groups:</Label>
				<Input type="text" placeholder="Groups" name="groups" value={groups} onChange={(e) => setGroups(e.target.value)} />

				<Label>Location:</Label>
				<Input type="text" placeholder="Location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />

				<button type="submit">Add New</button>
				{errorMessage && <p>{errorMessage}</p>}
			</Form>
		</>
	);
}

export default AddForm;
