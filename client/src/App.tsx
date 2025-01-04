import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, LoginForm, PageNotFound } from "@/pages";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={`/en`} element={<Home />} />
				<Route path={`/en/auth/login`} element={<LoginForm />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
