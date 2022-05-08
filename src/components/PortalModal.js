import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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
	z-index: 999;

	header {
		background-color: ${({ theme }) => theme.colors.lightgrey};
		padding: 0.5rem 0 0.5rem 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	main {
		padding: 1.2rem;
		flex-grow: 1;
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
	}
	footer {
		background-color: ${({ theme }) => theme.colors.lightgrey};
		text-align: right;
		padding: 0.5rem 1.2rem;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-end;
		gap: 1rem;
	}
`;

const Button = styled.button`
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
				<main>{children.length ? children[0] : children}</main>
				<footer>
					<Button onClick={onClose}>Back</Button>
					{children.length ? children[1] : null}
				</footer>
			</ModalBox>
		</BackgroundOverlay>,
		document.getElementById('portal')
	);
};

export default PortalModal;
