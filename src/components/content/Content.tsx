import { Navbar } from '../navbar/Navbar';
import { ContentContainer } from './ContentContainer';

export const Content = (): JSX.Element => {
	return (
		<ContentContainer>
			<Navbar />
		</ContentContainer>
	);
};
