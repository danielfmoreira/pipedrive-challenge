import styled from 'styled-components';
import { useRef } from 'react';
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
`;

const CloseBtn = styled(MdClose)`
	position: absolute;
	top: 0px;
	right: 0px;
`;

function ContactModal({ showModal, setShowModal, contact }) {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(!showModal);
		}
	};

	return (
		<>
			{showModal ? (
				<BackgroundOverlay ref={modalRef} onClick={closeModal}>
					<ModalBox>
						<CloseBtn
							onClick={() => {
								setShowModal(!showModal);
							}}
						/>
					</ModalBox>
				</BackgroundOverlay>
			) : null}
		</>
	);
}

export default ContactModal;
