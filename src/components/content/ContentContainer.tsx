import styled from 'styled-components';
import { bgColor1, bgColor2 } from '../../utils';

export const ContentContainer = styled.div`
	background: linear-gradient(to bottom right, ${bgColor1} 0%, ${bgColor2} 75%);
	border-bottom-right-radius: 2rem;
	border-top-right-radius: 2rem;
	margin: 1rem 4rem;
	width: 80%;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		display: flex;
		flex-direction: column;
		margin: 1rem 0 0 0;
		width: 100%;
	}
`;
