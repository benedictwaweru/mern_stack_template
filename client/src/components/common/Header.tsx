import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import Logo from "@/assets/images/logo.svg";

interface HeaderProps {
	children: ReactNode;
	headersArray: string[];
}

export function Header({ children, headersArray }: HeaderProps) {
	return (
		<header className="flex justify-between place-items-center w-full lg:justify-around">
			<img src={Logo} alt="Logo" className="w-16 lg:w-20" />
			<nav className="hidden lg:flex">
				<ul className="gap-6 flex">
					{
						headersArray.map(
							(item: string, index: number): JSX.Element => (
								<li key={index} className="hover:underline">
									<Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</Link>
								</li>
							)
						)
					}
				</ul>
			</nav>
			<section className="hidden md:flex">{children}</section>
			<Menu className="flex mx-2 cursor-pointer md:hidden" />
		</header>
	);
}
