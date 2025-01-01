import { ReactNode } from "react";

import { buttonVariants } from "@/constants/variants";

interface ButtonProps {
	children: ReactNode;
	/**
	 * @callback onClick - must be mandatory
	 */
	onClick?: () => void;
	type?: `submit` | `reset` | `button`;
	size?: `sm` | `md` | `lg` | `icon`;
	variant?: `primary` | `secondary` | `ghost` | `destructive`;
}

export const Button = ({ children, onClick, type, size, variant }: ButtonProps) => {
	return (
		<button type={type} onClick={onClick} className={buttonVariants({ variant, size })}>{children}</button>
	);
}
