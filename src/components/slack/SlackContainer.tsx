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
`;
