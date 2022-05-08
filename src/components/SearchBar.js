import { useContext, useState } from 'react';
import styled from 'styled-components';
import { ContactListContext } from '../context/contacts.context';

function SearchBar() {
	const [searchString, setSearchString] = useState('');
	const { setContacts, allContacts } = useContext(ContactListContext);

	const handleSearch = (event) => {
		setSearchString(event.target.value);

		const searchResult = allContacts.filter((person) => {
			return person.name.toLowerCase().includes(searchString.toLowerCase());
		});
		setContacts(searchResult);
	};

	return <input value={searchString} placeholder="Search by name" type="text" onChange={handleSearch} />;
}

export default SearchBar;
