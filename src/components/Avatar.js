import styled from 'styled-components';

const ImgAvatar = styled.img`
	border-radius: 50%;
	width: ${(props) => props.width || '50px'};
	height: ${(props) => props.width || '50px'};
`;

const InitialsContainer = styled.p`
	background-color: ${({ theme }) => theme.colors.lightblue};
	color: ${({ theme }) => theme.colors.blue};
	font-size: 1rem;
	font-weight: 600;
	border-radius: 50%;
	width: ${(props) => props.width || '50px'};
	height: ${(props) => props.width || '50px'};
	display: grid;
	place-items: center;
`;

function Avatar({ width, src, initials }) {
	let hasPicture;
	if (src !== '') {
		hasPicture = false;
	} else {
		hasPicture = true;
	}

	return <>{hasPicture ? <InitialsContainer width={width}>{initials}</InitialsContainer> : <ImgAvatar width={width} src={src} />}</>;
}

export default Avatar;
