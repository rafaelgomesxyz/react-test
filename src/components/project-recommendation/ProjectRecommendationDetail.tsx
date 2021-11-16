import styled from 'styled-components';

export const ProjectRecommendationDetail = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-around;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		align-items: flex-start;
		flex-direction: column;
		gap: 0.2rem;
		justify-content: flex-start;
		margin-bottom: 1rem;
	}
`;
