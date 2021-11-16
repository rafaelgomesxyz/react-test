import AvatarImage3 from '../../assets/avatarImage3.jpg';
import AvatarImage4 from '../../assets/avatarImage4.jpg';
import { Badge } from '../badge/Badge';
import { Invoice } from './Invoice';
import { InvoiceAvatar } from './InvoiceAvatar';
import { InvoiceBadgeContainer } from './InvoiceBadgeContainer';
import { InvoiceInfo } from './InvoiceInfo';
import { InvoicePrice } from './InvoicePrice';
import { InvoiceSubTitle } from './InvoiceSubTitle';
import { InvoiceTextContainer } from './InvoiceTextContainer';
import { InvoiceTitle } from './InvoiceTitle';
import { InvoicesCardContent } from './InvoicesCardContent';
import { InvoicesContainer } from './InvoicesContainer';

export const Invoices = () => {
	return (
		<InvoicesContainer>
			<InvoicesCardContent>
				<Invoice>
					<InvoiceInfo>
						<InvoiceAvatar>
							<img src={AvatarImage3} alt="" />
						</InvoiceAvatar>

						<InvoiceTextContainer>
							<InvoiceTitle>Alexander Williams</InvoiceTitle>
							<InvoiceSubTitle>ABC Holdings</InvoiceSubTitle>
						</InvoiceTextContainer>
					</InvoiceInfo>

					<InvoiceBadgeContainer>
						<Badge paid>Paid</Badge>
						<InvoicePrice>$ 1,200.87</InvoicePrice>
					</InvoiceBadgeContainer>
				</Invoice>

				<Invoice>
					<InvoiceInfo>
						<InvoiceAvatar>
							<img src={AvatarImage4} alt="" />
						</InvoiceAvatar>

						<InvoiceTextContainer>
							<InvoiceTitle>John Philips</InvoiceTitle>
							<InvoiceSubTitle>Inchor Associates</InvoiceSubTitle>
						</InvoiceTextContainer>
					</InvoiceInfo>

					<InvoiceBadgeContainer>
						<Badge late>Late</Badge>
						<InvoicePrice>$ 6,500.87</InvoicePrice>
					</InvoiceBadgeContainer>
				</Invoice>
			</InvoicesCardContent>
		</InvoicesContainer>
	);
};
