import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const ContactListContext = createContext()

function ContactListWrapper({children}) {
    const [contacts, setContacts] = useState([]);
    const [isUpdated, setIsUpdated] = useState(true)

    useEffect(() => {
		getContacts();
	}, [isUpdated]);

	const getContacts = async () => {
		try {
			const response = await axios.get(`${API_URL}/persons?limit=200&api_token=${KEY}`);
			console.log(response.data)
			setContacts(response.data.data.reverse());
			setIsUpdated(true)
		} catch (error) {
			console.log(error);
		}
	};
    
    return (
        <ContactListContext.Provider value={{isUpdated, setIsUpdated, contacts, setContacts}}>
            {children}
        </ContactListContext.Provider>
    )
}

export { ContactListContext , ContactListWrapper}