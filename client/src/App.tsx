import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageNotFound } from "./pages";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}