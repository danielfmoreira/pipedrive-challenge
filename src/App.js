import styled from 'styled-components';
import logo from './assets/pipedrive-logo.png';
import ContactList from './components/ContactList';
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';
import FlexRow from './components/Styled/FlexRow.styled';
import { ContactListContext } from './context/contacts.context';
import { useContext } from 'react';

const Navbar = styled.nav`
	padding: 1rem;
	background-color: rgb(64, 67, 70);
	height: 8vh;
	display: flex;
	align-items: center;
	img {
		height: 2rem;
	}
`;
const MainWrapper = styled.main`
	margin: 0 auto;
	padding: 3rem;
	max-width: 1000px;
`;

const H1 = styled.h1`
	border-bottom: 1px solid lightgrey;
	padding: 20px 0;
`;

const App = () => {

	const { isLoading } = useContext(ContactListContext)

	return (
		<>
		
			<Navbar>
				<img src={logo} alt="Pipedrive logo" />
			</Navbar>
			<MainWrapper>
				<H1>People's List</H1>
				<FlexRow height="80px" justify="space-between" align="flex-end" p="0 0 1rem 0">
					<AddButton />
					<SearchBar />
				</FlexRow>
				{!isLoading ? <ContactList /> : <p>Loading...</p>}
			</MainWrapper>
		</>
	);
};
export default App;
