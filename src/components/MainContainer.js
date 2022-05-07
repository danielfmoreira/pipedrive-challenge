import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import AddButton from './AddButton';
import axios from 'axios';
import styled from 'styled-components';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const MainWrapper = styled.main`
	margin: 0 auto;
	padding: 5rem;
	max-width: 1000px;
`;

const H1 = styled.h1`
	border-bottom: 1px solid lightgrey;
	padding: 20px 0;
`;

function MainContainer() {
	const [contacts, setContacts] = useState([]);
	const [isUpdated, setIsUpdate] = useState(true);
	
	useEffect(() => {
		getContacts();
	}, [isUpdated]);

	const getContacts = async () => {
		try {
			const response = await axios.get(`${API_URL}/persons?limit=200&api_token=${KEY}`);
			console.log(response.data)
			setContacts(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<MainWrapper>
			<H1>People's List</H1>
			<AddButton />
			<ContactList contacts={contacts} setContacts={setContacts} />
		</MainWrapper>
	);
}

export default MainContainer;
