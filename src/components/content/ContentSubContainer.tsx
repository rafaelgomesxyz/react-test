import styled from 'styled-components';

export const ContentSubContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	height: 80%;
	margin: 0.5rem 0;
	width: 100%;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		height: 100%;
	}
`;
