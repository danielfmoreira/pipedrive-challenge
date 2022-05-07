import styled from 'styled-components';
import Avatar from './Avatar';

const Box = styled.section`
	width: 100%;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 2fr;
	grid-rows: auto;
    padding: 1rem 1rem 3rem;
	div {
		grid-column-end: span 2;
        padding: 1rem;
		border-bottom: 2px solid ${({ theme }) => theme.colors.lightgrey};
		display: flex;
		flex-direction: column;
		align-items: center;
        margin-bottom: .5rem;
	}
	.phone {
		color: ${({ theme }) => theme.colors.green};
	}
    h3 {
        margin-top: 1rem;
    }
`;

const Label = styled.p`
	text-align: right;
	font-weight: 600;
`;

const Info = styled.p`
	text-align: left;
    color: ${({ theme }) => theme.colors.grey};
`;

function ContactDetails({ contact }) {
	const hasPicture = contact.picture_id ? true : false;

	let initials;
	if (contact.last_name) {
		initials = contact.first_name[0] + contact.last_name[0];
	} else {
		initials = contact.first_name[0] + contact.first_name[1];
	}

    console.log(contact)

	return (
		<Box>
			<div>
				<Avatar width="90px" src={hasPicture ? contact.picture_id.pictures[128] : ''} initials={initials} />
				<h3>{contact.name}</h3>
				<p className="phone">{contact.phone[0]?.value}</p>
			</div>
			<Label>Email:</Label>
			<Info>{contact.email[0]?.value}</Info>
			<Label>Organization:</Label>
			<Info>{contact.org_name}</Info>
			<Label>Assistant:</Label>
			<Info>{contact.ead969773b1c36b82991c53b93516ee07556666e}</Info>
			<Label>Groups:</Label>
			<Info>{contact.e17b7fccc25fc6a50263ba9421b9d0089b78ab86}</Info>
			<Label>Location:</Label>
			<Info>{contact.org_id.address}</Info>
		</Box>
	);
}

export default ContactDetails;
