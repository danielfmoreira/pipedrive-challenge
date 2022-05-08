import styled from 'styled-components';
import { useState, useContext } from 'react';
import axios from 'axios';
import { ContactListContext } from '../context/contacts.context';

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
    console.log(person)

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();

			const personId = person.id;
            let orgId = person.org_id ? person.org_id.value : ""

            //If organization exists and needs update
            if(person.org_id) {
                if(organization !== person.org_id.name || location !== person.org_id.address){
                    await axios.put(`${API_URL}/organizations/${person.org_id.value}?api_token=${KEY}`, {
                        name: organization,
                        address: location,
                    });
                }
            }

            //If organization does not exist, create one and add location
			if(!person.org_id && organization) {

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
				<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

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

export default EditForm;
