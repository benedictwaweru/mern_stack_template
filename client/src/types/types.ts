import { z } from "zod";

export const signUpSchema = z
	.object({
		fullName: z.string(),
		email: z.string().email({ message: `Please enter a valid email address` }),
		password: z
			.string()
			.min(8, `Password must be at least 8 characters long`)
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_-])[A-Za-z\d`~!@#$%^&*()_-]{8,}$/,
				`Password must include uppercase and lowercase letters, numbers, and special characters`
			),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: `Passwords do not match`,
		path: ["confirmPassword"],
	});

export const logInSchema = z.object({
	email: z.string().email({ message: `Please enter a valid email address` }),
	password: z
		.string()
		.min(8, `Password must be at least 8 characters long`)
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_-])[A-Za-z\d`~!@#$%^&*()_-]{8,}$/,
			`Password must include uppercase and lowercase letters, numbers, and special characters`
		),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TLogInSchema = z.infer<typeof logInSchema>;
