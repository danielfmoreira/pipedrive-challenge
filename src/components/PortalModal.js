import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from './Styled/Button.styled';

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
	width: 480px;
	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;
	z-index: 999;
`;
const Header = styled.header`
	background-color: ${({ theme }) => theme.colors.lightgrey};
	padding: 0.5rem 0 0.5rem 1.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Main = styled.main`
	padding: 1.2rem;
	flex-grow: 1;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
`;

const Footer = styled.footer`
	background-color: ${({ theme }) => theme.colors.lightgrey};
	text-align: right;
	padding: 0.5rem 1.2rem;
	display: flex;
	flex-direction: ${(props) => props.footerFlow || 'row'};
	flex-wrap: wrap;
	justify-content: flex-end;
	gap: 1rem;
`;

const PortalModal = ({ children, title, isOpen, closeModal, footerFlow, ...props }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<BackgroundOverlay>
			<ModalBox>
				<Header>
					<h2>{title ? title : 'Details'}</h2>
					<Button bgColor="transparent" border="none" color="black" onClick={closeModal}>
						X
					</Button>
				</Header>
				<Main>{children.length ? children[0] : children}</Main>
				<Footer footerFlow={footerFlow}>
					<Button ml="auto" color="grey" bgColor="white" onClick={closeModal}>
						Back
					</Button>
					{children.length ? children[1] : null}
				</Footer>
			</ModalBox>
		</BackgroundOverlay>,
		document.getElementById('portal')
	);
};

export default PortalModal;
