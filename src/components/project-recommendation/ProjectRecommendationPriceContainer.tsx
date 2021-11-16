import styled from 'styled-components';

export const ProjectRecommendationPriceContainer = styled.div`
	align-items: center;
	background-color: rgba(146, 166, 255, 0.3);
	border-radius: 1rem;
	display: flex;
	justify-content: space-between;
	margin: 0 1rem;
	padding: 0.5rem 1rem;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		gap: 0.4rem;
	}
`;
