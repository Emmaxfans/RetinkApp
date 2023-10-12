import "./SideNav.css";
import logo from "../../assets/Icons/logo.svg";
import home from "../../assets/Icons/home.svg";
import content from "../../assets/Icons/contentview.svg";
import settings from "../../assets/Icons/settings.svg";
import logout from "../../assets/Icons/vector.svg";
import menu from "../../assets/Icons/menu1.svg";
import close from "../../assets/Icons/close.svg";
import { useState } from "react";

const SideNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<nav className={`side-nav ${isOpen ? "side-nav-active" : ""}`}>
				<img
					src={isOpen ? close : menu}
					alt="nav-toggle"
					className="icon"
					onClick={toggleNavbar}
				/>

				<a href="#">
					<img className="logo" src={logo} alt="logo" />
				</a>

				<a href="#">
					<img src={home} alt="home-button" />
				</a>

				<a href="#">
					<img src={content} alt="home-button" />
				</a>

				{/* Bottom 2 Icons */}

				<a href="#">
					<img className="settings" src={settings} alt="settings" />
				</a>

				<a href="#">
					{" "}
					<img src={logout} alt="logout-button" />
				</a>
			</nav>
		</>
	);
};

export default SideNav;
