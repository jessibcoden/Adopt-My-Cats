"use strict";

let cats = [];

$.ajax('https://random-dogs-api.herokuapp.com/cats/110').done((cats) => {
	cats = cats.cats;
	// dom.catsDomString(cats);

console.log(cats);

	}).fail((error) => {
		console.log(error);
});

const getCats = () => {
	return cats;
};



module.exports = {getCats};