import { AiOutlinePieChart } from 'react-icons/ai';
import { FaWallet } from 'react-icons/fa';
import { RiFileCopyLine, RiHomeLine } from 'react-icons/ri';
import AvatarImage from '../../assets/avatarImage.jpg';
import { SidebarAvatar } from './SidebarAvatar';
import { SidebarBadge } from './SidebarBadge';
import { SidebarContactContainer } from './SidebarContactContainer';
import { SidebarContainer } from './SidebarContainer';
import { SidebarLink } from './SidebarLink';
import { SidebarLinks } from './SidebarLinks';
import { SidebarLinksContainer } from './SidebarLinksContainer';
import { SidebarName } from './SidebarName';
import { SidebarProfileContainer } from './SidebarProfileContainer';

export const Sidebar = (): JSX.Element => {
	return (
		<SidebarContainer>
			<SidebarProfileContainer>
				<SidebarAvatar src={AvatarImage} />
				<SidebarName>Rafael Gomes</SidebarName>
				<SidebarBadge>Pro Level</SidebarBadge>
			</SidebarProfileContainer>

			<SidebarLinksContainer>
				<SidebarLinks>
					<SidebarLink>
						<RiHomeLine />
						<h3>Dashboard</h3>
					</SidebarLink>

					<SidebarLink>
						<RiFileCopyLine />
						<h3>Projects</h3>
					</SidebarLink>

					<SidebarLink>
						<FaWallet />
						<h3>Invoices</h3>
					</SidebarLink>

					<SidebarLink>
						<AiOutlinePieChart />
						<h3>Reports</h3>
					</SidebarLink>
				</SidebarLinks>

				<SidebarContactContainer>
					<div>Having troubles?</div>
					<a href="#contact-us">Contact us</a>
				</SidebarContactContainer>
			</SidebarLinksContainer>
		</SidebarContainer>
	);
};
