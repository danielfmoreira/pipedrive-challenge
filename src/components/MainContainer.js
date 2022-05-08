import React, { useEffect, useState, useContext } from 'react';
import ContactList from './ContactList';
import AddButton from './AddButton';
import axios from 'axios';
import styled from 'styled-components';
import { ContactListContext } from '../context/ContactList.context';


const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const MainWrapper = styled.main`
	margin: 0 auto;
	padding: 3rem;
	max-width: 1000px;
`;

const H1 = styled.h1`
	border-bottom: 1px solid lightgrey;
	padding: 20px 0;
`;

function MainContainer() {
	// const [contacts, setContacts] = useState([]);

	// useEffect(() => {
	// 	getContacts();
	// }, [isUpdated]);

	// const getContacts = async () => {
	// 	try {
	// 		const response = await axios.get(`${API_URL}/persons?limit=200&api_token=${KEY}`);
	// 		console.log(response.data)
	// 		setContacts(response.data.data.reverse());
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<MainWrapper>
			<H1>People's List</H1>
			<AddButton />
			<ContactList />
		</MainWrapper>
	);
}

export default MainContainer;
