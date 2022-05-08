import styled from 'styled-components';
import { useState, useContext } from 'react';
import axios from 'axios';
import { ContactListContext } from '../context/ContactList.context';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const Row = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 0.5rem;
	justify-content: space-between;
	input,
	select {
		width: 48%;
	}
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-flow: column wrap;
	padding: 1rem 0;
	input,
	select {
		height: 2.5rem;
		padding: 0.5rem;
		color: #000;
		border: 1px solid ${({ theme }) => theme.colors.grey};
	}
	label {
		text-align: left;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 10px 0 5px;
		color: ${({ theme }) => theme.colors.grey};
	}
`;

function AddForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [emailLabel, setEmailLabel] = useState('work');
	const [phone, setPhone] = useState('');
	const [phoneLabel, setPhoneLabel] = useState('work');
	const [groups, setGroups] = useState('');
	const [location, setLocation] = useState('');
	const [assistant, setAssistant] = useState('');
	const [organization, setOrganization] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const { setIsUpdated } = useContext(ContactListContext);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			console.log('submitting');
			const name = `${firstName} ${lastName}`;

			// Create a organization and add location
			let orgId = ""

			if(organization) {
			const newOrganization = await axios.post(`${API_URL}/organizations?api_token=${KEY}`, {
				name: organization,
			});

			orgId = newOrganization.data.data.id;

			await axios.put(`${API_URL}/organizations/${orgId}?api_token=${KEY}`, {
				address: location,
			});
		}
			// Create a person
			const newPerson = {
				name: name,
				email: [
					{
						value: email,
						primary: true,
						label: emailLabel,
					},
				],
				phone: [
					{
						value: phone,
						primary: true,
						label: phoneLabel,
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
			setPhoneLabel('work');
			setEmail('');
			setEmailLabel('work');
			setOrganization('');
			setAssistant('');
			setGroups('');
			setLocation('');


			setIsUpdated(false)

			//Close Dialog
		} catch (error) {
			console.log(error);
			setErrorMessage('Something went wrong. Try again');
		}
	};

	return (
		<>
			<Form id="add-person-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<Row>
					<input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
					<input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</Row>

				<label htmlFor="organization">Organization:</label>
				<input type="text" name="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />

				<label htmlFor="phone">Phone:</label>
				<Row>
					<input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
					<select name="phoneLabel" defaultValue={phoneLabel} onChange={(e) => setPhoneLabel(e.target.value)}>
						<option value="work">Work</option>
						<option value="home">Home</option>
						<option value="mobile">Mobile</option>
						<option value="other">Other</option>
					</select>
				</Row>
				<label htmlFor="email">Email:</label>
				<Row>
					<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<select name="emailLabel" defaultValue={emailLabel} onChange={(e) => setEmailLabel(e.target.value)}>
						<option value="work">Work</option>
						<option value="home">Home</option>
						<option value="mobile">Mobile</option>
						<option value="other">Other</option>
					</select>
				</Row>
				<label htmlFor="assistant">Assistant:</label>
				<input type="text" name="assistant" value={assistant} onChange={(e) => setAssistant(e.target.value)} />

				<label htmlFor="groups">Groups:</label>
				<input type="text" name="groups" value={groups} onChange={(e) => setGroups(e.target.value)} />

				<label htmlFor="location">Location:</label>
				<input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
				{errorMessage && <p>{errorMessage}</p>}
			</Form>
		</>
	);
}

export default AddForm;