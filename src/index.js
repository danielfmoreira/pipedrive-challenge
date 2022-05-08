import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { ContactListWrapper } from './context/contacts.context';

const theme = {
	colors: {
		lightgrey: 'rgb(247,247,247)',
		grey: 'rgb(169,169,169)',
		lightblue: 'rgb(222,234,250)',
		blue: 'rgb(59,129,227)',
		green: 'rgb(60, 179, 113)',
	},
};

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
  button {
	  border: none;
	  border-radius: 2px;
	  background-color: rgb(60, 179, 113);
	  padding: 0.5rem 1.5rem;
  }
`;

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
				<ContactListWrapper>
					<GlobalStyle />
					<App />
				</ContactListWrapper>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
