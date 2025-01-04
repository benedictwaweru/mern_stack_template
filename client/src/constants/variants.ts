import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex gap-2 items-center justify-center rounded-md text-white text-sm font-semibold m-2",
	{
		variants: {
			variant: {
				primary: "bg-blue-500 hover:bg-blue-400",
				secondary: "bg-gray-600 hover:bg-gray-400",
				ghost: "text-primary underline-offset-4 hover:underline",
				destructive: "bg-red-500 hover:bg-red-400",
			},
			size: {
				sm: "h-8 px-3 text-xs",
				md: "h-9 px-4 py-2 text-sm",
				lg: "h-10 px-8 text-md",
				icon: "h-10 w-10 p-2",
			}
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		}
	}
);
