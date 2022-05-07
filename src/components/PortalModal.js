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
	z-index: 100;

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
	footer {
		background-color: ${({ theme }) => theme.colors.lightgrey};
		text-align: right;
		padding: 0.5rem 1rem;
	}
`;

const Button = styled.button`
	padding: 3px 10px;
	background-color: ${(props) => props.color || 'white'};
	border: ${(props) => props.border || '1px solid grey'};
`;

const PortalModal = ({ children, isOpen, onClose, title }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<BackgroundOverlay>
			<ModalBox>
				<header>
					<h2>{title ? title : 'Details'}</h2>
					<Button color="transparent" border="none" onClick={onClose}>
						X
					</Button>
				</header>
				<main>{children}</main>
				<footer>
					<Button onClick={onClose}>Back</Button>
				</footer>
			</ModalBox>
		</BackgroundOverlay>,
		document.getElementById('portal')
	);
};

export default PortalModal;
