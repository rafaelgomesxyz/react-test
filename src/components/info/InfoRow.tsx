import styled from 'styled-components';

export interface InfoRowProps {
	justify?: boolean;
}

export const InfoRow = styled.div`
	align-items: center;
	display: flex;
	margin-bottom: 0.4rem;

	${({ justify }: InfoRowProps) =>
		justify &&
		`
			justify-content: space-around;
			width: 90%;
		`}
`;
