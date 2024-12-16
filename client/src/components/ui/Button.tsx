import { cva } from "class-variance-authority";
import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick: () => void;
	type?: `submit` | `reset` | `button`;
	size?: `sm` | `md` | `lg` | `icon`;
	variant?: `primary` | `secondary` | `ghost` | `destructive`;
}

const buttonVariants = cva(
	'inline-flex gap-2 items-center justify-center rounded-md text-white text-sm font-semibold m-2',
	{
		variants: {
			variant: {
				primary: 'bg-blue-500 hover:bg-blue-400',
				secondary: 'bg-gray-500 hover:bg-gray-400',
				ghost: 'bg-background text-black hover:bg-accent hover:text-accent-foreground hover:underline',
				destructive: 'bg-red-500 hover:bg-red-400'
			},
			size: {
				sm: 'h-8 px-3 text-xs',
				md: 'h-9 px-4 py-2 text-sm',
				lg: 'h-10 px-8 text-md',
				icon: 'h-10 w-10 p-2'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md'
		}
	}
);

export const Button = ({ children, size, type, onClick, variant }: ButtonProps) => {
	return (
		<button type={type} onClick={onClick} className={buttonVariants({ variant, size })}>{children}</button>
	);
}