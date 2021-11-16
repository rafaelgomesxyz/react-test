import { BadgeContainer } from './BadgeContainer';

export interface BadgeProps {
	glow?: boolean;
	paid?: boolean;
	late?: boolean;
	children: React.ReactNode;
}

export const Badge = ({ glow = false, paid = false, late = false, children }: BadgeProps) => {
	return (
		<BadgeContainer glow={glow} paid={paid} late={late}>
			{children}
		</BadgeContainer>
	);
};
