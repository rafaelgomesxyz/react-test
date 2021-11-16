import styled from 'styled-components';
import { hoverEffect, linksBgColor } from '../../utils';

export const SlackContainer = styled.div`
	align-items: center;
	background-color: ${linksBgColor};
	border-radius: 1rem;
	display: flex;
	height: 50%;
	margin-top: 6.5rem;
	transition: 0.4s ease-in-out;

	&:hover {
		box-shadow: ${hoverEffect};
	}

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		height: max-content;
		margin-bottom: 2rem;
		margin-top: 2rem;
		width: 80%;
	}
`;
