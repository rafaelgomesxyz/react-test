import styled from 'styled-components';

export const InvoiceBadgeContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 30%;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		gap: 0.6rem;
		width: 100%;
	}
`;
