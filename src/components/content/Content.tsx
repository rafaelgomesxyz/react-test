import { Earnings } from '../earnings/Earnings';
import { Info } from '../info/Info';
import { Navbar } from '../navbar/Navbar';
import { Projects } from '../projects/Projects';
import { ContentContainer } from './ContentContainer';
import { ContentSection1 } from './ContentSection1';
import { ContentSection1Column1 } from './ContentSection1Column1';
import { ContentSection1Column2 } from './ContentSection1Column2';
import { ContentSection2 } from './ContentSection2';
import { ContentSection2Column1 } from './ContentSection2Column1';
import { ContentSection2Column2 } from './ContentSection2Column2';
import { ContentSubContainer } from './ContentSubContainer';
import { ContentColumnTitle } from './ContentColumnTitle';

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
					<ContentSection2Column1></ContentSection2Column1>

					<ContentSection2Column2></ContentSection2Column2>
				</ContentSection2>
			</ContentSubContainer>
		</ContentContainer>
	);
};
