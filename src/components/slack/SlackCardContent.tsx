import styled from 'styled-components';

export const SlackCardContent = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin: 1rem;
	width: 100%;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		gap: 1rem;
	}
`;
