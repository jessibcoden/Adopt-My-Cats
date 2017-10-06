"use strict";

const dom = require('./dom.js');

let cats = [];

const catCount = (value) => {
	console.log("value", value);

	$.ajax(`https://random-dogs-api.herokuapp.com/cats/${value}`).done((cats1) => {
		console.log(cats1);		
		cats = cats1.cats;
		dom.domString(cats);

	console.log(cats);

		}).fail((error) => {
			console.log(error);
	});
};

const getCats = () => {
	return cats;
};

module.exports = {getCats, catCount};