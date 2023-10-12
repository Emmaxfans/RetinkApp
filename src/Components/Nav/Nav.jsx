import "./Nav.css";
// import alert from "../../assets/Icons/alert.svg";
import search from "../../assets/Icons/search.svg";
import c20 from "../../assets/Icons/c20.svg";
import calender from "../../assets/Icons/calender.svg";
import profile from "../../assets/Icons/profile.svg";

import Button from "../Button/Button";

const Nav = () => {
	return (
		<>
			<div className="nav">
				<div className="nav-div1">
					<div className="nav-sub1">
						<div className="sub1">
							<img src={search} alt="search-button" />
							<p>Search for templates, projects, etc</p>
						</div>
					</div>

					<div className="nav-space"></div>

					<div className="nav-sub2">
						<button>start</button>
						{/* <Button /> */}
					</div>

					<div className="nav-sub3">
						<img src={c20} alt="c20" />
					</div>
				</div>

				<div className="nav-div2">
					<img src={calender} alt="img1" />
					{/* <img src={alert} alt="img1" /> */}
					<img src={profile} alt="profile-img" />
				</div>
			</div>
		</>
	);
};

export default Nav;
