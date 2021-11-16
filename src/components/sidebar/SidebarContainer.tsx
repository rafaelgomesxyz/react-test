import styled from 'styled-components';
import { sidebarBgColor } from '../../utils';

export const SidebarContainer = styled.div`
	align-items: center;
	background-color: ${sidebarBgColor};
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	height: 100% !important;
	width: 20%;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		height: max-content !important;
		width: 100%;
	}
`;
