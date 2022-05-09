import axios from 'axios';
import { useContext } from 'react';
import { ContactListContext } from '../context/contacts.context';
import styled from 'styled-components';
import Button from './Styled/Button.styled';


const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function DeleteButton({ personId, closeModal }) {
	const { setIsUpdated } = useContext(ContactListContext);

	const handleDelete = async (e) => {
		try {
			e.preventDefault();

			await axios.delete(`${API_URL}/persons/${personId}?api_token=${KEY}`);
			setIsUpdated(false);
			closeModal();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Button bgColor="white" color="grey" onClick={handleDelete}>Delete</Button>
		</>
	);
}

export default DeleteButton;
