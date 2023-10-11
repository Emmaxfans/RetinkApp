import React from "react";

const Button = (props) => {
	return (
		<div className={props.btn}>
			<button>{props.text}</button>
		</div>
	);
};

export default Button;
