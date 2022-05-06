import styled from 'styled-components';

const ImgAvatar = styled.img`
	border-radius: 50%;
	width: ${props => props.width || "50px"};
`;


function Avatar({ width, src }) {
  return (
    <ImgAvatar width={width} src={src}/>
  )
}

export default Avatar