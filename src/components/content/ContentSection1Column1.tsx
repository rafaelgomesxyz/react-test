import styled from 'styled-components';

export const ContentSection1Column1 = styled.div`
	display: flex;
	gap: 3rem;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		width: 100%;
	}
`;
