import { Download } from "lucide-react";

import { Button } from "../components/ui/Button";
import { Footer, Header } from "../components/common";

export default function PageNotFound() {
	const handleHomePageClick = () => { }
	
	const handleDownloadClick = () => {}

	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center h-lvh">
				<h1 className="text-8xl font-bold m-4">404</h1>
				<h3 className="text-2xl font-medium m-4">
					Oops, the page you are looking for cannot be found!
				</h3>
				<div>
					<Button onClick={handleHomePageClick} >Take me home</Button>
					<Button onClick={handleDownloadClick} >Download the app <Download /></Button>
				</div>
			</div>
			<Footer/>
		</>
	);
}