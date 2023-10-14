import React from "react";
import "./ContainerCard.css";
import dataSet1, { dataSet2 } from "./Containerdata";
import img2 from "../../../assets/Iconss/arrow.svg";
import img3 from "../../../assets/Iconss/basil.svg";

const ContainerCard = () => {
	return (
		<div className="container-card">
			<h2>Social Media</h2>
			<div className="row">
				{dataSet1.map((items, index) => (
					<div key={index} className="container-contents">
						<div className="header-img">
							<img src={items.img1} alt={items.alt1} />
							<img src={items.img2} alt={items.alt2} />
						</div>
						<h3>{items.title}</h3>
						<p>{items.description}</p>
					</div>
				))}
			</div>

			<h2>Social Media</h2>
			<div className="row">
				{dataSet2.map((items, index) => (
					<div key={index} className="container-contents">
						<div className="header-img">
							<img src={items.img1} alt={items.alt1} />
							<img src={items.img2} alt={items.alt2} />
						</div>
						<h3>{items.title}</h3>
						<p>{items.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContainerCard;
