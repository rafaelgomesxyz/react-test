import styled from 'styled-components';
import { cardShadow, hoverEffect } from '../../utils';

export const ProjectsContainer = styled.div`
	background-color: white;
	border-radius: 1rem;
	box-shadow: ${cardShadow};
	height: 70%;
	margin: 0;
	padding: 1rem;
	transition: 0.5s all ease-in-out;

	&:hover {
		box-shadow: ${hoverEffect};
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		height: max-content;
		margin-top: 1rem;
		width: 75%;
	}
`;
