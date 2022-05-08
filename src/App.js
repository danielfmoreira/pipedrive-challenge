import styled from 'styled-components';
import MainContainer from './components/MainContainer';
import logo from './assets/pipedrive-logo.png';

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

const App = () => {
	return (
		<>
			<Navbar>
				<img src={logo} alt="Pipedrive logo" />
			</Navbar>
			<MainContainer />
		</>
	);
};
export default App;
