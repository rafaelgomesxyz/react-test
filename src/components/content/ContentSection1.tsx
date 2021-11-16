import styled from 'styled-components';

export const ContentSection1 = styled.div`
	display: flex;
	gap: 2rem;
	height: 40%;
	justify-content: space-between;
	width: 100%;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		align-items: center;
		flex-direction: column;
		height: max-content;
	}
`;
