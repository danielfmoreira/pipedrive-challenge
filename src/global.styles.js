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
  form {
    width: 100%;
	  display: flex;
	  flex-flow: column wrap;
	  padding: 1rem 0;
  }
  label {
	  text-align: left;
	  font-weight: 600;
	  margin: 10px 0 5px;
	  color: ${({ theme }) => theme.colors.grey};
	}
  input, select {
	  padding: 0.5rem;
	  color: #000;
    border-radius: 3px;
	  border: 1px solid ${({ theme }) => theme.colors.grey};
	}
  input {
    flex-grow: 2;
  }
  select {
    flex-grow: 1;
  }

`;

export default GlobalStyle;
