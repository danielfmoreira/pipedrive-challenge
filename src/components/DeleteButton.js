import axios from 'axios';
import { useContext } from 'react';
import { ContactListContext } from '../context/ContactList.context';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function DeleteButton({ personId }) {
	const { setIsUpdated } = useContext(ContactListContext);

	const handleDelete = async (e) => {
		try {
			e.preventDefault();

			await axios.delete(`${API_URL}/persons/${personId}?api_token=${KEY}`);
			setIsUpdated(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<button onClick={handleDelete}>Delete</button>
		</>
	);
}

export default DeleteButton;
