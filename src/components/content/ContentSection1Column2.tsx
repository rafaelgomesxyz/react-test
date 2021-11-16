import styled from 'styled-components';

export const ContentSection1Column2 = styled.div`
	display: flex;
	flex-direction: column;
	height: 115%;
	width: 100%;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		align-items: center;
		height: max-content;
		justify-content: center;
	}
`;
