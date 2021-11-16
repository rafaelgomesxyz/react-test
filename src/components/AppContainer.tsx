import styled from 'styled-components';
import { bgColor1, bgColor2 } from '../utils';

export const AppContainer = styled.div`
	background: linear-gradient(to bottom right, ${bgColor1} 0%, ${bgColor2} 75%);
	border-radius: 2rem;
	display: flex;
	height: calc(100vh - 1rem);
`;
