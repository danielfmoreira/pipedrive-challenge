import axios from 'axios';
import { useContext } from 'react';
import { ContactListContext } from '../context/contacts.context';
import Button from './Styled/Button.styled';
import { toast } from 'react-toastify';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function DeleteButton({ personId, closeModal }) {
	const { setIsUpdated } = useContext(ContactListContext);

	const handleDelete = async (e) => {
		try {
			e.preventDefault();

			await axios.delete(`${API_URL}/persons/${personId}?api_token=${KEY}`);
			toast.success('Person deleted successfully!');
			setIsUpdated(false);
			closeModal();
		} catch (error) {
			toast.error('Error while deleting a person!');
		}
	};

	return (
		<>
			<Button bgColor="white" color="grey" onClick={handleDelete}>
				Delete
			</Button>
		</>
	);
}

export default DeleteButton;
