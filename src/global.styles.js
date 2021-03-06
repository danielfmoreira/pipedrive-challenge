import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
	  font-size: 1.5rem;
  }
  h2 {
	  font-size: 1.2rem;
  }
  p, input, label, button, select {
    font-size: 0.9rem;
  }
  form 	 {
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

export default GlobalStyle;
