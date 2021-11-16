import styled from 'styled-components';

export const Invoice = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-around;
	margin: 0.4rem;
	padding-top: 0.6rem;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		gap: 1rem;
	}
`;
