import { FiSearch } from 'react-icons/fi';
import { NavbarContainer } from './NavbarContainer';
import { NavbarSearchContainer } from './NavbarSearchContainer';
import { NavbarSearchIcon } from './NavbarSearchIcon';
import { NavbarSearchInput } from './NavbarSearchInput';
import { NavbarTitle } from './NavbarTitle';

export const Navbar = (): JSX.Element => {
	return (
		<NavbarContainer>
			<NavbarTitle>
				Good morning, <span>Rafael</span>!
			</NavbarTitle>

			<NavbarSearchContainer>
				<NavbarSearchIcon>
					<FiSearch />
				</NavbarSearchIcon>

				<NavbarSearchInput type="text" placeholder="Search for projects" />
			</NavbarSearchContainer>
		</NavbarContainer>
	);
};
