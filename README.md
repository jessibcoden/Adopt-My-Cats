# Adopt-My-Cats

# Browserify Sandwich

> Nashville Software School, Full-Stack Dev Bootcamp, Front-End Independent Exercise
> 

### Requirements


The owner of a cat adoption website needs a website that allows users to load in the number of cats they currently have available, display them on my screen, then be able to filter them based on whether or not they are considered disabled (have 10 toes or less).

1. On page load, display an input box and a button.
    - The input box should prompt user to enter the number of cats that they currently have on the site.
    - User can either click the enter key in the input field or the button on the page to submit my number of cats.
2. Make a call to: `https://random-dogs-api.herokuapp.com/cats/NUMBEROFCATZZZZZ` (obviously replacing NUMBEROFCATZZZZZ with the actual number I entered in step 1).
3. Once all the cats come back:
   - They should be displayed on the page in card-like style (use Bootstrap columns to aid in this). 
   - Your card should be a `div`, it should have a nested `div` to display the cat image, it should have another nested `div` to contain all the descriptive elements (each in their own `p` tag).
    - If the cat has 10 toes or less, their `p` tag that contains their number of toes should have a class of `disabled-kitty`.
    - The input and button originally shown on the page should be hidden. 
    - A new button should now appear at the top of the page: 'Get Rid Of The Disabled Ones'
4. Once user clicks on the 'Get Rid Of The Disabled Ones' button, any card on page that has a `p` tag with the class `disabled-kitty` should be hidden.


### Tools You Should Be Using:
- Browserify
- Grunt
- jQuery (DOM methods, AJAX)
- Linting
- Bootstrap

	
### How to run (Node must be installed on your machine):
```
git clone https://github.com/lady-ace/Adopt-My-Cats
cd Adopt-My-Cats
```
```
cd lib
npm init
npm install grunt grunt-contrib-jshint matchdep grunt-contrib-watch grunt-browserify jshint-stylish --save-dev
npm install jquery bootstrap --save
```

```
npm install http-server -g
http-server -p 8080
```

This will show in your browser at:
`http://localhost:8080`

### Contributors:
[Jessica Brawner](https://github.com/lady-ace)