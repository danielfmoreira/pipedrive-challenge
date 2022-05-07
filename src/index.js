import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { MdSportsRugby } from 'react-icons/md';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

const theme = {
	colors: {
		lightgrey: 'rgb(220,220,220)',
		grey: 'rgb(169,169,169)',
		lightblue: 'rgb(222,234,250)',
		blue: 'rgb(59,129,227)',
		green: 'rgb(60, 179, 113)',
	},
};

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
