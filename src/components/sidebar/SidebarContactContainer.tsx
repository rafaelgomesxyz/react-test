import styled from 'styled-components';
import { sidebarBgColor } from '../../utils';

export const SidebarContactContainer = styled.div`
	background-color: ${sidebarBgColor};
	border-radius: 1rem;
	color: #c4c4c4;
	display: flex;
	flex-direction: column;
	margin: auto auto;
	padding: 1rem;
	width: 60%;

	a {
		color: white;
		text-decoration: none;
	}
`;
