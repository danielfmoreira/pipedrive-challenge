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

		const searchResult = allContacts.filter((person) => {
			return person.name.toLowerCase().includes(searchString.toLowerCase());
		});

		if (searchResult <= 0) {
			setContacts([]);
		}
		setContacts(searchResult);
	};

	return <StyledSearchBar value={searchString} placeholder="Search by name" type="text" onChange={handleSearch} />;
}

export default SearchBar;
