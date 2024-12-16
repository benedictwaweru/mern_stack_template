import { cva } from "class-variance-authority";

interface InputProps {
	type: string;
	placeholder: string;
	variant?: `textInput` | `calendar` | `pinInput`;
	size?: `sm` | `md` | `lg`;
};

const inputVariants = cva(
	'',
	{
		variants: {
			variant: {
				textInput: '',
				calendar: '',
				pinInput: ''
			},
			size: {
				sm: '',
				md: '',
				lg: ''
			}
		},
		defaultVariants: {
			variant: `textInput`,
			size: `md`
		}
	}
);

export const Input = ({ type, placeholder, variant, size }: InputProps) => {
	return (
		<input type={type} placeholder={placeholder} className={inputVariants({ variant, size })} />
	);
}