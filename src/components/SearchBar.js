import { useContext, useState } from 'react';
import styled from 'styled-components';
import { ContactListContext } from '../context/contacts.context';

const StyledSearchBar = styled.input`
	max-width: 360px;
`;

function SearchBar() {
	const [searchString, setSearchString] = useState('');
	const { setContacts, allContacts } = useContext(ContactListContext);

	const handleSearch = (event) => {
		setSearchString(event.target.value);

		if(searchString.length <= 0) {
			setContacts(allContacts)
		}

		console.log(searchString)

		const searchResult = allContacts.filter((person) => {
			return person.name.toLowerCase().includes(searchString.toLowerCase());
		});
		
		setContacts(searchResult);
	};

	return <StyledSearchBar value={searchString} placeholder="Search by name" type="text" onInput={handleSearch} onChange={handleSearch} />;
}

export default SearchBar;
