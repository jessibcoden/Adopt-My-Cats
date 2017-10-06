"use strict";

const domString = (kitties) => {
	let catString = '';
	for(let i = 0; i < kitties.length; i++) {
		let catCard = '';
		catCard += `<card class="cat-card">
			  			<div class="image-container">
			    			<img src="${kitties[i].imageUrl}">
			  			</div>
			  			<div class="description-container">
						    <h3>  ${kitties[i].name}  </h3>
						    <p> Color: ${kitties[i].color} </p>
						    <p> Skills: ${kitties[i].specialSkill} </p>`;
		
		if(kitties[i].numberOfToes <= 10) {
			catCard +=		`<p class="brokenCat"> Toes: ${kitties[i].numberOfToes} </p>`;
		
		}else {
			catCard +=		`<p> Toe Count: ${kitties[i].numberOfToes} </p>`;
		}

		catCard +=	  		`</div>
					</card>`;

		catString += catCard;
	}

	printToDom(catString);
};

const printToDom = (strang) => {
	$('#catContainer').html(strang);
};

module.exports = {domString};