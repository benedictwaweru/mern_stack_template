import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/components/ui";
import { logInSchema, TLogInSchema } from "@/types/types";

export default function LoginForm() {
	const loginForm = useForm<TLogInSchema>({ resolver: zodResolver(logInSchema) });

	return (
		<div className="flex justify-center items-center h-lvh">
			<Form {...loginForm}>
				<form>
					<div className="w-full place-items-center my-4">
						<h1 className="text-2xl font-bold">
							Welcome to {import.meta.env.VITE_COMPANY_NAME}
						</h1>
					</div>
					<FormField
						control={loginForm.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs font-semibold mt-2">
									Email address *
								</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="yourname@example.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={loginForm.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs font-semibold mt-2">
									Password *
								</FormLabel>
								<FormControl>
									<Input type="password" placeholder="••••••••" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</div>
	);
}
