import { useState, useContext } from 'react';
import axios from 'axios';
import { ContactListContext } from '../context/contacts.context';
import FlexRow from './Styled/FlexRow.styled';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function EditForm({ person, closeModal }) {
	const [name, setName] = useState(person.name);
	const [email, setEmail] = useState(person.email[0].value);
	const [emailLabel, setEmailLabel] = useState(person.email[0].label);
	const [phone, setPhone] = useState(person.phone[0].value);
	const [phoneLabel, setPhoneLabel] = useState(person.phone[0].label);
	const [groups, setGroups] = useState(person.e17b7fccc25fc6a50263ba9421b9d0089b78ab86);
	const [location, setLocation] = useState(person.org_id ? person.org_id.address : '');
	const [assistant, setAssistant] = useState(person.ead969773b1c36b82991c53b93516ee07556666e);
	const [organization, setOrganization] = useState(person.org_name);
	const [errorMessage, setErrorMessage] = useState('');

	const { setIsUpdated } = useContext(ContactListContext);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();

			console.log('editing');

			const personId = person.id;
			let orgId = person.org_id ? person.org_id.value : '';

			//If organization exists and needs update
			if (person.org_id) {
				if (organization !== person.org_id.name || location !== person.org_id.address) {
					await axios.put(`${API_URL}/organizations/${person.org_id.value}?api_token=${KEY}`, {
						name: organization,
						address: location,
					});
				}
			}

			//If organization does not exist, create one and add location
			if (!person.org_id && organization) {
				const newOrganization = await axios.post(`${API_URL}/organizations?api_token=${KEY}`, {
					name: organization,
				});

				orgId = newOrganization.data.data.id;

				await axios.put(`${API_URL}/organizations/${orgId}?api_token=${KEY}`, {
					name: name,
					address: location,
				});
			}

			// Create a person
			const updatedPerson = {
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

			await axios.put(`${API_URL}/persons/${personId}?api_token=${KEY}`, updatedPerson);

			setIsUpdated(false);
			closeModal();
		} catch (error) {
			console.log(error);
			setErrorMessage('Something went wrong. Try again');
		}
	};

	return (
		<>
			<form id="edit-person-form" onSubmit={handleSubmit}>
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

export default EditForm;
