import styled from 'styled-components';

const greenColor = ({ theme }) => theme.colors.green

const StyledButton = styled.button`
	border: ${(props) => props.border || `1px solid lightgrey`};
	opacity: 0.9;
    min-width: ${(props) => props.border || '100px'};
	font-weight: 600;
	background-color: ${(props) => props.bgColor || greenColor};
	color: ${(props) => props.color || '#fff'};
	border-radius: 3px;
	padding: 0.5rem 1.5rem;
	font-size: 1rem;
    margin-left: ${(props) => props.style.ml || "0px"};
    margin-right: ${(props) => props.style.mr || "0px"};
	&:hover,
  &:focus {
    opacity: 1;
  }
`;

function Button({ bgColor, border, color, children, onClick, type, form, ...props }) {
	return (
		<StyledButton color={color} bgColor={bgColor} style={props} type={type} form={form} border={border} onClick={onClick}>
			{children}
		</StyledButton>
	);
}

export default Button;
