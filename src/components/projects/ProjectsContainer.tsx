import styled from 'styled-components';
import { cardShadow, hoverEffect } from '../../utils';

export const ProjectsContainer = styled.div`
	background-color: white;
	border-radius: 1rem;
	box-shadow: ${cardShadow};
	height: 70%;
	margin: 0;
	padding: 1rem;
	transition: 0.5 all ease-in-out;

	&:hover {
		box-shadow: ${hoverEffect};
	}
`;
