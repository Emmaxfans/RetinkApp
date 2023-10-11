import "./BodyLayout.css";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";
import Body from "../Body/Body";

const BodyLayout = () => {
	return (
		<div className="bodylayout">
			<Nav />
			<Hero />
			<Body />
		</div>
	);
};

export default BodyLayout;
