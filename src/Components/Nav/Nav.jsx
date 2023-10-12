import "./Nav.css";
import search from "../../assets/Iconss/search1.svg";
import alert from "../../assets/Iconss/alert1.svg";
import c20 from "../../assets/Iconss/c201.svg";
import calender from "../../assets/Iconss/calender1.svg";
import profile from "../../assets/Iconss/profile01.svg";
import filter1 from "../../assets/Iconss/filter.svg";
import close from "../../assets/Iconss/close1.svg";

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
							{/* <div className="imgx"> */}
							<img src={filter1} alt="filter-button" />
							<img src={close} alt="close-button" />
							{/* </div> */}
						</div>
					</div>

					<div className="nav-space"></div>

					<div className="nav-sub2">
						<button className="btn"> Create Content </button>
						{/* <Button /> */}
					</div>

					<div className="nav-sub3">
						<img src={c20} alt="c20" />
					</div>
				</div>

				{/* <div className="div-2"> */}
				<div className="nav-div2">
					<img src={calender} alt="img1" />
					<img src={alert} alt="img1" />
					<img className="profile" src={profile} alt="profile-img" />
					{/* </div> */}
				</div>
			</div>
		</>
	);
};

export default Nav;
