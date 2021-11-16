import styled from 'styled-components';
import { cardShadow, hoverEffect } from '../../utils';

export const InvoicesContainer = styled.div`
	background-color: white;
	border-radius: 1rem;
	box-shadow: ${cardShadow};
	height: 140%;
	margin-top: 1rem;
	transition: 0.5s ease-in-out;
	width: 35rem;

	&:hover {
		box-shadow: ${hoverEffect};
	}
`;
