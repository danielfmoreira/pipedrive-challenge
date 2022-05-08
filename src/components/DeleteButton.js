import axios from 'axios';
import { useContext } from 'react';
import { ContactListContext } from '../context/contacts.context';
import styled from 'styled-components'


const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const DeleteBtn = styled.button`
	color: #fff
`

function DeleteButton({ personId, onClose }) {
	const { setIsUpdated } = useContext(ContactListContext);

	const handleDelete = async (e) => {
		try {
			e.preventDefault();

			await axios.delete(`${API_URL}/persons/${personId}?api_token=${KEY}`);
			setIsUpdated(false);
			onClose()
			
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
		</>
	);
}

export default DeleteButton;
