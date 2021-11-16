import { FaSlack } from 'react-icons/fa';
import { SlackCardContent } from './SlackCardContent';
import { SlackContainer } from './SlackContainer';
import { SlackContent } from './SlackContent';
import { SlackFoot } from './SlackFoot';
import { SlackHead } from './SlackHead';
import { SlackJoin } from './SlackJoin';
import { SlackLogo } from './SlackLogo';
import { SlackText } from './SlackText';

export const Slack = (): JSX.Element => {
	return (
		<SlackContainer>
			<SlackCardContent>
				<SlackContent>
					<SlackLogo>
						<FaSlack />
					</SlackLogo>

					<SlackText>
						<SlackHead>Engage with clients</SlackHead>
						<SlackFoot>Join slack channel</SlackFoot>
					</SlackText>
				</SlackContent>

				<SlackJoin>Join Now</SlackJoin>
			</SlackCardContent>
		</SlackContainer>
	);
};
