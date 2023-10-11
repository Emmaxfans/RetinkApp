import "./HomeLayout.css";
import SideNav from "../Side-Nav/SideNav";
import BodyLayout from "../BodyLayout/BodyLayout";

const HomeLayout = () => {
	return (
		<div className="homelayout">
			<SideNav />
			<BodyLayout />
		</div>
	);
};

export default HomeLayout;
