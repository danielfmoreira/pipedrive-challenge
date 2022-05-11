import styled from 'styled-components';

const Form = styled.form`
	 {
		width: 100%;
		display: flex;
		flex-flow: column wrap;
		padding: 1rem 0;
		gap: 0.2rem;
	}
	label {
		text-align: left;
		font-weight: 600;
		margin: 10px 0 2px;
		color: ${({ theme }) => theme.colors.grey};
	}
	input,
	select {
		padding: 0.5rem;
		color: #000;
		border-radius: 3px;
		border: 1px solid ${({ theme }) => theme.colors.grey};
		background-color: #fff;
	}
	input {
		flex-grow: 1;
	}
	select {
		flex-grow: 2;
	}
	.add-array {
		line-height: 0px;
		cursor: pointer;
		color: rgb(49, 122, 226);
		font-size: 0.9rem;
		font-weight: 600;
		margin-bottom: 10px;
	}
	.add-array:hover {
		text-decoration: underline;
	}
	.form-error span {
		height: 10px;
		color: red;
		font-size: 0.8rem;
		font-weight: 600;
	}
	.form-error-array {
		display: block;
		margin-bottom: 15px;
	}
	.form-error-array span {
		margin-bottom: 5px;
		color: red;
		font-size: 0.8rem;
		font-weight: 600;
	}
	.input-error {
		border: 1px solid red;
	}
`;

function StyledForm({ props, children }) {
	return (
		<Form >
			{children}
		</Form>
	);
}

export default StyledForm;
