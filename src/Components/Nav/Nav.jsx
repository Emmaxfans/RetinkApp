import "./Nav.css";
import alert from "../../assets/Icons/alert.svg";
import Button from "../Button/Button";

const Nav = () => {
	return (
		<>
			<div className="nav">
				<div className="nav-div1">
					<div className="nav-sub1">
						<div className="sub1">
							<p>Search for templates, projects, etc</p>
						</div>
					</div>

					<div className="nav-sub2">
						<button>start</button>
						{/* <Button /> */}
					</div>

					<div className="nav-sub3">
						<img src={alert} alt="img1" />
					</div>
				</div>

				<div className="nav-div2">
					<img src={alert} alt="img1" />
					<img src={alert} alt="img1" />
					<img src={alert} alt="img1" />
				</div>
			</div>
		</>
	);
};

export default Nav;
