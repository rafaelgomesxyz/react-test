import AvatarImage5 from '../../assets/avatarImage5.jpg';
import { Badge } from '../badge/Badge';
import { ProjectRecommendationAvatar } from './ProjectRecommendationAvatar';
import { ProjectRecommendationCardContent } from './ProjectRecommendationCardContent';
import { ProjectRecommendationContainer } from './ProjectRecommendationContainer';
import { ProjectRecommendationDetail } from './ProjectRecommendationDetail';
import { ProjectRecommendationInfo } from './ProjectRecommendationInfo';
import { ProjectRecommendationInfoContainer } from './ProjectRecommendationInfoContainer';
import { ProjectRecommendationInfoName } from './ProjectRecommendationInfoName';
import { ProjectRecommendationInfoUpdate } from './ProjectRecommendationInfoUpdate';
import { ProjectRecommendationPrice } from './ProjectRecommendationPrice';
import { ProjectRecommendationPriceContainer } from './ProjectRecommendationPriceContainer';
import { ProjectRecommendationSubTitle } from './ProjectRecommendationSubTitle';
import { ProjectRecommendationTitle } from './ProjectRecommendationTitle';

export const ProjectRecommendation = (): JSX.Element => {
	return (
		<ProjectRecommendationContainer>
			<ProjectRecommendationCardContent>
				<ProjectRecommendationDetail>
					<ProjectRecommendationInfoContainer>
						<ProjectRecommendationAvatar>
							<img src={AvatarImage5} alt="" />
						</ProjectRecommendationAvatar>

						<ProjectRecommendationInfo>
							<ProjectRecommendationInfoName>Thomas Martin</ProjectRecommendationInfoName>
							<ProjectRecommendationInfoUpdate>Updated 10m ago</ProjectRecommendationInfoUpdate>
						</ProjectRecommendationInfo>
					</ProjectRecommendationInfoContainer>

					<Badge clean>Design</Badge>
				</ProjectRecommendationDetail>

				<ProjectRecommendationTitle>
					Need a designer to form branding essentials for my business.
				</ProjectRecommendationTitle>
				<ProjectRecommendationSubTitle>
					Looking for a talented brand designer to create all the branding materials for my new
					startup.
				</ProjectRecommendationSubTitle>

				<ProjectRecommendationPriceContainer>
					<ProjectRecommendationPrice>$8700/month</ProjectRecommendationPrice>

					<Badge>Full Time</Badge>
				</ProjectRecommendationPriceContainer>
			</ProjectRecommendationCardContent>
		</ProjectRecommendationContainer>
	);
};
