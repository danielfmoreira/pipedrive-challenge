import { useState, useContext } from 'react';
import axios from 'axios';
import { ContactListContext } from '../context/contacts.context';
import FlexRow from './Styled/FlexRow.styled';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function AddForm({ closeModal }) {
	const [name, setName] = useState('');
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
			//const name = `${firstName} ${lastName}`;

			// Create a organization and add location
			let orgId = '';

			if (organization) {
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

			const createdPerson = await axios.post(`${API_URL}/persons?api_token=${KEY}`, newPerson);
			console.log({ createdPerson });

			//Clear the form
			setName('');
			setPhone('');
			setPhoneLabel('work');
			setEmail('');
			setEmailLabel('work');
			setOrganization('');
			setAssistant('');
			setGroups('');
			setLocation('');

			setIsUpdated(false);
			closeModal();
		} catch (error) {
			console.log(error);
			setErrorMessage('Something went wrong. Try again');
		}
	};

	return (
		<>
			<form id="add-person-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

				<label htmlFor="organization">Organization:</label>
				<input type="text" name="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />

				<label htmlFor="phone">Phone:</label>
				<FlexRow justify="space-between" gap="1rem">
					<input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
					<select name="phoneLabel" defaultValue={phoneLabel} onChange={(e) => setPhoneLabel(e.target.value)}>
						<option value="work">Work</option>
						<option value="home">Home</option>
						<option value="mobile">Mobile</option>
						<option value="other">Other</option>
					</select>
				</FlexRow>
				<label htmlFor="email">Email:</label>
				<FlexRow justify="space-between" gap="1rem">
					<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<select name="emailLabel" defaultValue={emailLabel} onChange={(e) => setEmailLabel(e.target.value)}>
						<option value="work">Work</option>
						<option value="home">Home</option>
						<option value="mobile">Mobile</option>
						<option value="other">Other</option>
					</select>
				</FlexRow>
				<label htmlFor="assistant">Assistant:</label>
				<input type="text" name="assistant" value={assistant} onChange={(e) => setAssistant(e.target.value)} />

				<label htmlFor="groups">Groups:</label>
				<input type="text" name="groups" value={groups} onChange={(e) => setGroups(e.target.value)} />

				<label htmlFor="location">Location:</label>
				<input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
				{errorMessage && <p>{errorMessage}</p>}
			</form>
		</>
	);
}

export default AddForm;
