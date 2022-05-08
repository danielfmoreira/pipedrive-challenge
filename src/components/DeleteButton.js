import axios from 'axios';

const KEY = process.env.REACT_APP_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function DeleteButton({ personId }) {
	//console.log("personId", personId)

	const handleDelete = async (e) => {
		try {
			e.preventDefault();

			await axios.delete(`${API_URL}/persons/${personId}?api_token=${KEY}`);
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
