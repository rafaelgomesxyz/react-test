import styled from 'styled-components';
import { badgeBgColor } from '../../utils';

export interface BadgeContainerProps {
	glow: boolean;
	paid: boolean;
	late: boolean;
}

export const BadgeContainer = styled.div`
	background-color: ${badgeBgColor};
	border-radius: 1rem;
	color: white;
	cursor: pointer;
	font-weight: 500;
	padding: 0.25rem 1rem;

	${({ glow }: BadgeContainerProps) =>
		glow &&
		`
			background-color: rgba(109, 134, 245, 0.192);
			color: #2f233d;
			font-size: 0.8rem;
			font-weight: normal;
			padding: 0.2rem 0.5rem;		
		`}
`;
