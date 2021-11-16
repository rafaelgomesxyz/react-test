import { BadgeContainer } from './BadgeContainer';

export interface BadgeProps {
	glow?: boolean;
	paid?: boolean;
	late?: boolean;
	clean?: boolean;
	children: React.ReactNode;
}

export const Badge = ({
	glow = false,
	paid = false,
	late = false,
	clean = false,
	children,
}: BadgeProps): JSX.Element => {
	return (
		<BadgeContainer glow={glow} paid={paid} late={late} clean={clean}>
			{children}
		</BadgeContainer>
	);
};
