import { createContext, useState } from 'react';

const ModalContext = createContext();

function ModalWrapper({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState('');
	const [modalTitle, setModalTitle] = useState('');

	console.log({isOpen})
	console.log({modalContent})
	console.log({modalTitle})

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return <ModalContext.Provider value={{ isOpen, setIsOpen, openModal, closeModal, modalContent, setModalContent, modalTitle, setModalTitle }}>{children}</ModalContext.Provider>;
}

export { ModalWrapper, ModalContext };
