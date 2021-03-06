import { Earnings } from '../earnings/Earnings';
import { Info } from '../info/Info';
import { Invoices } from '../invoices/Invoices';
import { Navbar } from '../navbar/Navbar';
import { Projects } from '../projects/Projects';
import { Slack } from '../slack/Slack';
import { ContentContainer } from './ContentContainer';
import { ContentSection1 } from './ContentSection1';
import { ContentSection1Column1 } from './ContentSection1Column1';
import { ContentSection1Column2 } from './ContentSection1Column2';
import { ContentSection2 } from './ContentSection2';
import { ContentSection2Column1 } from './ContentSection2Column1';
import { ContentSection2Column1Block1 } from './ContentSection2Column1Block1';
import { ContentSection2Column2 } from './ContentSection2Column2';
import { ContentSubContainer } from './ContentSubContainer';
import { ContentColumnTitle } from './ContentColumnTitle';
import { ProjectRecommendation } from '../project-recommendation/ProjectRecommendation';

export const Content = (): JSX.Element => {
	return (
		<ContentContainer>
			<Navbar />

			<ContentSubContainer>
				<ContentSection1>
					<ContentSection1Column1>
						<Earnings />
						<Info />
					</ContentSection1Column1>

					<ContentSection1Column2>
						<ContentColumnTitle>Your Projects</ContentColumnTitle>
						<Projects />
					</ContentSection1Column2>
				</ContentSection1>

				<ContentSection2>
					<ContentSection2Column1>
						<ContentSection2Column1Block1>
							<ContentColumnTitle>Recent Invoices</ContentColumnTitle>
							<Invoices />
						</ContentSection2Column1Block1>

						<Slack />
					</ContentSection2Column1>

					<ContentSection2Column2>
						<ContentColumnTitle>Recommended Project</ContentColumnTitle>
						<ProjectRecommendation />
					</ContentSection2Column2>
				</ContentSection2>
			</ContentSubContainer>
		</ContentContainer>
	);
};
