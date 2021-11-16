import { AppContainer } from './components/AppContainer';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/sidebar/Sidebar';
import './App.css';

export const App = (): JSX.Element => {
	return (
		<AppContainer>
			<Sidebar />
			<MainContent />
		</AppContainer>
	);
};
