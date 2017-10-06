"use strict";

const domString = (kitties) => {
	let catString = '';
	for(let i = 0; i < kitties.length; i++) {
		let catCard = '';
		catCard += `<div class="cat-card">
			  			<div class="image-container">
			    			<img src="IMAGELINK">
			  			</div>
			  			<div class="description-container">
						    <h3> CAT NAME </h3>
						    <p> Color: COLORRRR </p>
						    <p> Skills: SKILLLLLZ </p>`;
		
		if(kitties[i].toeCount <= 10) {
			catCard +=		`<p class="disabled-cat"> Toes: TOESSSS </p>`;
		
		}else {
			catCard +=		`<p> Toe Count: ${kitties[i].toeCount} </p>`;
		}

		catCard +=	  		`</div>
					</div>`;

		catString += catCard;
	}

	printToDom(catString);
};

const printToDom = (strang) => {
	$('#catContainer').html(strang);
};

module.exports = {domString};