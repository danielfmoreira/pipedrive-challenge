import styled from 'styled-components';

const StyledRow = styled.div`
	display: flex;
	flex-direction: ${(props) => props.flow || 'row'};
	flex-wrap: wrap;
	justify-content: ${(props) => props.justify || 'flex-start'};
	align-items: ${(props) => props.align || 'center'};
	gap: ${(props) => props.gap || '0px'};
	bgcolor: ${(props) => props.bgColor || 'transparent'};
	padding: ${(props) => props.p || '0px'};
	margin: ${(props) => props.m || '0px'};
	min-height: ${(props) => props.height || '0px'};
`;

function FlexRow({ bgColor, gap, justify, m, p, align, flow, children, height }) {
	return (
		<StyledRow bgColor={bgColor} gap={gap} m={m} p={p} justify={justify} height={height} align={align} flow={flow}>
			{children}
		</StyledRow>
	);
}

export default FlexRow;
