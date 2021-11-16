import { Badge } from '../badge/Badge';
import { InfoCard } from './InfoCard';
import { InfoCardContent } from './InfoCardContent';
import { InfoContainer } from './InfoContainer';
import { InfoDigit } from './InfoDigit';
import { InfoRow } from './InfoRow';
import { InfoRowContent } from './InfoRowContent';
import { InfoSubTitle } from './InfoSubTitle';
import { InfoTitle } from './InfoTitle';

export const Info = () => {
	return (
		<InfoContainer>
			<InfoCard>
				<InfoCardContent>
					<InfoRow>
						<InfoDigit>98</InfoDigit>

						<InfoRowContent>
							<InfoTitle>Rank</InfoTitle>
							<InfoSubTitle>In top 20%</InfoSubTitle>
						</InfoRowContent>
					</InfoRow>
				</InfoCardContent>
			</InfoCard>

			<InfoCard>
				<InfoCardContent>
					<InfoRow>
						<InfoDigit>32</InfoDigit>

						<InfoRowContent>
							<InfoTitle>Projects</InfoTitle>
							<InfoSubTitle>8 this month</InfoSubTitle>
						</InfoRowContent>
					</InfoRow>

					<InfoRow justify>
						<Badge glow>mobile app</Badge>
						<Badge glow>branding</Badge>
					</InfoRow>
				</InfoCardContent>
			</InfoCard>
		</InfoContainer>
	);
};
