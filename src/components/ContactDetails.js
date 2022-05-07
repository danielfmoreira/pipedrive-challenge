import styled from 'styled-components';
import Avatar from './Avatar';

const Box = styled.section``;

function ContactDetails({ contact }) {
	const hasPicture = contact.picture_id? true : false

	let initials;
	if (contact.last_name) {
		initials = contact.first_name[0] + contact.last_name[0];
	} else {
		initials = contact.first_name[0] + contact.first_name[1];
	}



	return (
		<Box>
			<Avatar src={hasPicture ? contact.picture_id.pictures[128] : ""} initials={initials} />
			<h2>{contact.name}</h2>
			<p>Phone: {contact.phone[0]?.value}</p>
			<p>Email: {contact.email[0]?.value}</p>
		</Box>
	);
}

export default ContactDetails;
