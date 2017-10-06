"use strict";

const dom = require('./dom');

let cats = [];

$.ajax('https://random-dogs-api.herokuapp.com/cats/${value}').done((cats) => {
	cats = cats.cats;
	dom.domString(cats);

console.log(cats);

	}).fail((error) => {
		console.log(error);
});

const getCats = () => {
	return cats;
};

module.exports = {getCats};