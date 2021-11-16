import styled from 'styled-components';
import { cardShadow, hoverEffect } from '../../utils';

export const ProjectRecommendationContainer = styled.div`
	background-color: white;
	border-radius: 1rem;
	box-shadow: ${cardShadow};
	height: 130%;
	padding: 1rem;
	transition: 0.5s ease-in-out;
	width: 27.5vw;

	&:hover {
		box-shadow: ${hoverEffect};
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		height: max-content;
		margin: 2rem 0;
		width: 80%;
	}
`;
