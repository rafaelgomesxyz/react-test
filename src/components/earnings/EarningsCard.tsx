import styled from 'styled-components';
import { badgeBgColor, hoverEffect } from '../../utils';

export const EarningsCard = styled.div`
	background-color: ${badgeBgColor};
	border-radius: 1rem;
	color: white;
	height: 100%;
	padding: 1rem;
	transition: 0.5s ease-in-out;
	width: 15rem;

	&:hover {
		box-shadow: ${hoverEffect};
	}
`;
