import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
	border-radius: 2rem;
	display: flex;
	height: 97vh;
`;

export const App = () => {
	return <Container></Container>;
};
