import styled from 'styled-components';
import { cardShadow, hoverEffect } from '../../utils';

export const InfoContainer = styled.div`
	background-color: white;
	border-radius: 1rem;
	box-shadow: ${cardShadow};
	color: white;
	height: 100%;
	padding: 1rem;
	transition: 0.5s ease-in-out;
	width: 14rem;

	&:hover {
		box-shadow: ${hoverEffect};
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		width: 80%;
	}
`;
