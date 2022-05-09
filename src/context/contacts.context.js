import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const ContactListContext = createContext();

function ContactListWrapper({ children }) {
	const [contacts, setContacts] = useState([]);
	const [allContacts, setAllContacts] = useState([]);
	const [isUpdated, setIsUpdated] = useState(true);
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getContacts();
	}, [isUpdated]);

	const getContacts = async () => {
		try {
			setIsLoading(true)
			const response = await axios.get(`${API_URL}/persons?limit=200&api_token=${KEY}`);
			const contactList = response.data.data.reverse();
			setContacts(contactList);
			setAllContacts(contactList);
			setIsUpdated(true);
			setIsLoading(false)
		} catch (error) {
			console.log(error);
		}
	};

	console.log({ contacts });

	return (
		<ContactListContext.Provider value={{ isUpdated, isLoading, setIsUpdated, contacts, setContacts, allContacts, setAllContacts }}>{children}</ContactListContext.Provider>
	);
}

export { ContactListContext, ContactListWrapper };
