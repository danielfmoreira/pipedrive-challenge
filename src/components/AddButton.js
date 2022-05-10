import { useState } from 'react';
import AddForm from './AddForm';
import PortalModal from './PortalModal';
import Button from './Styled/Button.styled';

function AddButton() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>+ Person</Button>
			<PortalModal title="Add Person" isOpen={isOpen} closeModal={() => setIsOpen(false)}>
				<AddForm closeModal={() => setIsOpen(false)} />
				<Button form="add-person-form" type="submit">
					Save
				</Button>
			</PortalModal>
		</>
	);
}

export default AddButton;
