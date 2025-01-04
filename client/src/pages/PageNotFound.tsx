import { Download } from "lucide-react";
import { Navigate } from "react-router-dom";

import { Button, Separator } from "@/components/ui";
import { Footer, Header } from "@/components/common";

export default function PageNotFound() {
	const handleHomePageClick = () => {
		return <Navigate to={`/en`} />;
	};

	const handleLogInClick = () => {
		return <Navigate to={`/en/auth/login`} />;
	};

	const handleSignUpClick = () => {
		return <Navigate to={`/en/auth/signup`} />;
	};

	return (
		<>
			<Header
				headersArray={[]}
				children={
					<>
						<Button onClick={handleLogInClick} variant="secondary">Log In</Button>
						<Button onClick={handleSignUpClick}>Get Started</Button>
					</>
				}
			/>
			<div className="flex flex-col items-center justify-center h-lvh">
				<h1 className="text-6xl font-bold m-4 md:text-7xl lg:text-8xl">Error: 404</h1>
				<h3 className="text-lg font-medium m-4 md:text-xl lg:text-2xl">
					Oops! Sorry, the page you are looking for cannot be found!
				</h3>
				<div>
					<Button onClick={handleHomePageClick}>Take me home</Button>
					<Button>Download the app <Download /></Button>
				</div>
			</div>
			<Separator />
			<Footer />
		</>
	);
}
