import styled from 'styled-components';

export const ContentSection2 = styled.div`
	display: flex;
	gap: 2rem;
	height: 26vh;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		height: max-content;
		width: 100%max-content;
	}
`;
