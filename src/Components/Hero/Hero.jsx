import "./Hero.css";
import cube from "../../assets/Iconss/cube.svg";
import blend from "../../assets/Iconss/blend.svg";
import circle from "../../assets/Iconss/circle.svg";

const Hero = () => {
	return (
		<>
			<div className="hero">
				<div className="hero1">
					<div className="hero1-sub1">
						<h2>Hey James!</h2>
						<p>Lets create something awesome today ✨</p>
						<button className="hero-button">start creating</button>
					</div>

					<div className="hero1-sub2">
						<img src={cube} alt="cube" />
					</div>
				</div>

				<div className="hero2">
					{/* <div className="hero2-sub1"> */}
					<img className="hero2-sub1" src={blend} alt="blend" />
					{/* </div> */}
					<div className="hero2-sub2">
						<p>
							You should have more engagement by 6pm today, try posting then. 📆{" "}
						</p>

						<p>
							Try our SEO optimization tool to increase engagement by 40% 🔥
						</p>
					</div>

					<div className="hero2-sub3">
						<select id="option-icon">
							<option disabled selected>
								Zara Ventures
							</option>
						</select>
					</div>
					<img className="hero2-sub4" src={circle} alt="circle" />
				</div>
			</div>
		</>
	);
};

export default Hero;
