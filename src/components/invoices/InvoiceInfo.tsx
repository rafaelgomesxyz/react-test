import styled from 'styled-components';

export const InvoiceInfo = styled.div`
	align-items: center;
	display: flex;
	width: 50%;

	@media screen and (min-width: 320px) and (max-width: 1080px) {
		flex-direction: column;
		text-align: center;
		width: 100%;
	}
`;
