import React from "react";
import "./ContainerCard.css";
import dataSet1, { dataSet2 } from "./Containerdata";
import img1 from "../../../assets/Iconss/pen.svg";
import img2 from "../../../assets/Iconss/arrow.svg";

const ContainerCard = () => {
	const dataSet1 = [
		{
			img1: "src/assets/Iconss/pen.svg",
			img2: "src/assets/Iconss/arrow.svg",
			alt1: "image1",
			alt2: "image2",
			title: "Blog writng",
			description:
				"Generate the best blog post to fit your audience with just few clicks of a button",
			classname_img1: "img-prop1",
			classname_img2: "img-prop2",
		},
		{
			img1: "src/assets/Iconss/basil.svg",
			img2: "src/assets/Iconss/arrow.svg",
			alt1: "image1",
			alt2: "image2",
			title: "Product description",
			description: "Instantly generate engaging product descriptions that sell",
			classname_img1: "img-prop1",
			classname_img2: "img-prop2",
		},

		{
			img1: "src/assets/Iconss/text.svg",
			img2: "src/assets/Iconss/arrow.svg",
			alt1: "image1",
			alt2: "image2",
			title: "Article writer",
			description:
				"Automatically create unique factual articles at the touch of a button",
			classname_img1: "img-prop1",
			classname_img2: "img-prop2",
		},

		{
			img1: "src/assets/Iconss/pen.svg",
			img2: "src/assets/Iconss/arrow.svg",
			alt1: "image1",
			alt2: "image2",
			title: "Blog writng",
			description:
				"Generate the best blog post to fit your audience with just few clicks of a button",
			classname_img1: "img-prop1",
			classname_img2: "img-prop2",
		},
	];

	const dataSet2 = [
		{
			img1: "src/assets/Iconss/pen.svg",
			img2: "src/assets/Iconss/arrow.svg",
			alt1: "image1",
			alt2: "image2",
			title: "Blog writng",
			description:
				"Generate the best blog post to fit your audience with just few clicks of a button",
			classname_img1: "img-prop1",
			classname_img2: "img-prop2",
		},
		{
			img1: "src/assets/Iconss/basil.svg",
			img2: "src/assets/Iconss/arrow.svg",
			alt1: "image1",
			alt2: "image2",
			title: "Product description",
			description: "Instantly generate engaging product descriptions that sell",
			classname_img1: "img-prop1",
			classname_img2: "img-prop2",
		},

		{
			img1: "src/assets/Iconss/text.svg",
			img2: "src/assets/Iconss/arrow.svg",
			alt1: "image1",
			alt2: "image2",
			title: "Article writer",
			description:
				"Automatically create unique factual articles at the touch of a button",
			classname_img1: "img-prop1",
			classname_img2: "img-prop2",
		},
		{
			img1: "src/assets/Iconss/pen.svg",
			img2: "src/assets/Iconss/arrow.svg",
			alt1: "image1",
			alt2: "image2",
			title: "Blog writng",
			description:
				"Generate the best blog post to fit your audience with just few clicks of a button",
			classname_img1: "img-prop1",
			classname_img2: "img-prop2",
		},
	];

	// export default dataSet1;

	return (
		<div className="container-card">
			<h2>Social Media</h2>
			<div className="row">
				{dataSet1.map((items, index) => (
					<div key={index} className="container-contents">
						<div className="header-img">
							<img src={img1} alt={items.alt1} />
							<img src={img2} alt={items.alt2} />
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
							<img src={img1} alt={items.alt1} />
							<img src={img2} alt={items.alt2} />
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
