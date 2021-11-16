import AvatarImage1 from '../../assets/avatarImage1.jpg';
import AvatarImage2 from '../../assets/avatarImage2.jpg';
import { AllProjects } from './AllProjects';
import { Project } from './Project';
import { ProjectAvatar } from './ProjectAvatar';
import { ProjectDetail } from './ProjectDetail';
import { ProjectSubTitle } from './ProjectSubTitle';
import { ProjectTitle } from './ProjectTitle';
import { ProjectsContainer } from './ProjectsContainer';

export const Projects = (): JSX.Element => {
	return (
		<ProjectsContainer>
			<Project>
				<ProjectAvatar>
					<img src={AvatarImage1} alt="" />
				</ProjectAvatar>

				<ProjectDetail>
					<ProjectTitle>Logo design for bakery</ProjectTitle>
					<ProjectSubTitle>1 day remaining</ProjectSubTitle>
				</ProjectDetail>
			</Project>

			<Project>
				<ProjectAvatar>
					<img src={AvatarImage2} alt="" />
				</ProjectAvatar>

				<ProjectDetail>
					<ProjectTitle>Personal branding projects</ProjectTitle>
					<ProjectSubTitle>5 days remaining</ProjectSubTitle>
				</ProjectDetail>
			</Project>

			<AllProjects>See all projects</AllProjects>
		</ProjectsContainer>
	);
};
