import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              your code inside these <div> tags
const output = chris;
let chris = (
	<div>
		<h1>My name is {customer.first_name}</h1>
		<h2>My las name is {customer.last_name}</h2>
	</div>
);

//              what     where
ReactDOM.render(chris, document.querySelector("#myDiv"));
