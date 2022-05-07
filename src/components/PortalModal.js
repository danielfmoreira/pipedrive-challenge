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
	position: relative;
	border: 1px solid lightgrey;
	background-color: #fff;
	width: 400px;
	min-height: 400px;
	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;

	header {
		background-color: lightgrey;
		padding: 0.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	main {
		flex-grow: 1;
	}
	button {
		padding: 3px 5px;
	}
	footer {
		position: absolute:
		top: 0;
		background-color: red;
	}
`;

const PortalModal = ({ children, isOpen, onClose, title }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<BackgroundOverlay>
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
