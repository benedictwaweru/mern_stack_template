export function Footer() {
	const companyName = import.meta.env.VITE_COMPANY_NAME;

	return (
		<footer className="flex justify-around">
			<p className="text-sm font-light mb-6">{companyName}&trade; {new Date().getFullYear()}. All Rights Reserved</p>
		</footer>
	);
}
