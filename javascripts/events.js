"use strict";

const cats = require('./cats');

$('#catCountInput').keyup((event) => {
	if(event.key === 'Enter') {
		displayCats();
		hideCatCountInput();
	}
});

$('#catCountBtn').click(() => {
	console.log("button clicked");
	displayCats();
	hideCatCountInput();
});

$('#disabledCatBtn').click(() => {
	hideBrokenCats();
});

const displayCats = () => {
	cats.catCount($('#catCountInput').val());
};

const hideCatCountInput = () => {
	$('#catCountInput, #catCountBtn').addClass('hidden');
	$('#disabledCatBtn').removeClass('hidden');
};

const hideBrokenCats = () => {
	$('.brokenCat').closest('card').addClass('hidden');
};

module.exports = {};