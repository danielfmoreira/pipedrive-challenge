import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import axios from 'axios';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function MainContainer() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		getContacts()
	}, []);


	const getContacts = async () => {
		try {
			const response = await axios.get(`${API_URL}/persons/?api_token=${KEY}`);
			setItems(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return <ContactList items={items} setItems={setItems} />;
}

export default MainContainer;
