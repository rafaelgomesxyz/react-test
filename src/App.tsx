import { AppContainer } from './components/AppContainer';
import { Content } from './components/content/Content';
import { Sidebar } from './components/sidebar/Sidebar';
import './App.css';

export const App = (): JSX.Element => {
	return (
		<AppContainer>
			<Sidebar />
			<Content />
		</AppContainer>
	);
};
