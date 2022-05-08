import { useContext, useState } from 'react';
import { ContactListContext } from '../context/contacts.context';

function SortBySelect() {
	const [sortBy, setSortBy] = useState('');

	const { contacts } = useContext(ContactListContext);
	const { setContacts } = useContext(ContactListContext);

	const handleSort = (e) => {
		switch (e.target.value) {
			case 'person-name':
				const byName = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
				setContacts(byName);
				break;
			case 'organization-name':
				console.log('here');
				const byOrgName = [...contacts].sort((a, b) => {
					if (a.org_name == null || b.org_name == null) {
						return a;
					} else {
						return a.org_name.localeCompare(b.org_name);
					}
				});
				setContacts(byOrgName);
				break;
			case 'last-modified':
				const byLastModified = [...contacts].sort((a, b) => Date.parse(a.update_time) < Date.parse(b.update_time));
				console.log(byLastModified);
				setContacts(byLastModified);
				break;
			default:
				console.log('4');
		}
	};

	return (
		<>
			<select name="sort-by" onChange={(e) => handleSort(e)}>
				<option value="last-modified">Last Added</option>
				<option value="last-modified">Last Modified</option>
				<option value="person-name">Person Name</option>
				<option value="organization-name">Organization</option>
			</select>
		</>
	);
}

export default SortBySelect;
