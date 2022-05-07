import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const BackgroundOverlay = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
`;

const ModalBox = styled.section`
	border: 1px solid ${({ theme }) => theme.colors.lightgrey};
	border-radius: 4px;
	background-color: #fff;
	min-width: 400px;
	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;

	header {
		background-color: ${({ theme }) => theme.colors.lightgrey};
		padding: 0.5rem 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	main {
		padding: 1rem;
		flex-grow: 1;
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
	}
	button {
		padding: 3px 5px;
	}
	footer {
		background-color: ${({ theme }) => theme.colors.lightgrey};
		text-align: right;
		padding: 0.5rem 1rem;
	}
`;

const PortalModal = ({ children, isOpen, onClose, title }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<BackgroundOverlay onClick={onClose}>
			<ModalBox>
				<header>
					<h2>{title ? title : 'Details'}</h2>
					<button onClick={onClose}>X</button>
				</header>
				<main>{children}</main>
				<footer>
					<button onClick={onClose}>Back</button>
				</footer>
			</ModalBox>
		</BackgroundOverlay>,
		document.getElementById('portal')
	);
};

export default PortalModal;
