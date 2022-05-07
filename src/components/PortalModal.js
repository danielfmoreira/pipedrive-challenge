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

const ModalBox = styled.div`
	position: relative;
	z-index: 10;
	border: 1px solid lightgrey;
	background-color: #fff;
	width: 400px;
	min-height: 400px;
	padding: 1.5rem;
`;

const CloseBtn = styled(MdClose)`
	position: absolute;
	top: 1rem;
	right: 1rem;
`;

const PortalModal = ({ children, isOpen, onClose }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<BackgroundOverlay>
			<ModalBox>
				<CloseBtn className="close" onClick={onClose} />
				{children}
			</ModalBox>
		</BackgroundOverlay>,
		document.getElementById('portal')
	);
};

export default PortalModal;
