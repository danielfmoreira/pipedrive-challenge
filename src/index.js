import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { ContactListWrapper } from './context/contacts.context';
import GlobalStyle from './global.styles';


const theme = {
	colors: {
		lightgrey: 'rgb(247,247,247)',
		grey: 'rgb(169,169,169)',
		lightblue: 'rgb(222,234,250)',
		blue: 'rgb(59,129,227)',
		green: 'rgb(60, 179, 113)',
	},
};

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
