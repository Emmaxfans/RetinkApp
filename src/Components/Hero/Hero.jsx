import "./Hero.css";
import cube from "../../assets/Iconss/cube.svg";
import blend from "../../assets/Iconss/blend.svg";
import circle from "../../assets/Iconss/circle.svg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	return (
		<>
			<div className="hero">
				<div className="hero1">
					<div className="hero1-sub1">
						<h2>Hey James!</h2>
						<p>
							<Typewriter
								words={["Lets create something awesome today ✨"]}
								loop={0}
								cursor
								cursorStyle="|"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={4000}
							/>
						</p>
						<button className="hero-button">start creating</button>
					</div>

					<div className="hero1-sub2">
						<img src={cube} alt="cube" />
					</div>
				</div>

				<div className="hero2">
					<div className="hero2-sub1">
						<img className="blend-img" src={blend} alt="blend" />
					</div>
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
