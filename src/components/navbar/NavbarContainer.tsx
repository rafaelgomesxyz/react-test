import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	align-items: center;
	display: flex;
	height: 10%;
	justify-content: space-between;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		margin-bottom: 1rem;
	}
`;
