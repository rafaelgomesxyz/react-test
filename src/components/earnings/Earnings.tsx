import { IoStatsChart } from 'react-icons/io5';
import { EarningsCard } from './EarningsCard';
import { EarningsCardContent } from './EarningsCardContent';
import { EarningsChartIcon } from './EarningsChartIcon';
import { EarningsIncrease } from './EarningsIncrease';
import { EarningsTitle } from './EarningsTitle';
import { EarningsValue } from './EarningsValue';

export const Earnings = (): JSX.Element => {
	return (
		<EarningsCard>
			<EarningsCardContent>
				<EarningsChartIcon>
					<IoStatsChart />
				</EarningsChartIcon>

				<EarningsTitle>Earnings</EarningsTitle>

				<EarningsValue>$7,890</EarningsValue>

				<EarningsIncrease>+ 10% since last month</EarningsIncrease>
			</EarningsCardContent>
		</EarningsCard>
	);
};
