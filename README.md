# Simple React Calculator

## What
This project is a simple one, just a calculator built using React, HTML, CSS, and Javascript.

## Personal Takeaways
I had intended this project simpley because I had never built a calculator, and it sounded like good practice. As soon as I got into the calculations, though, the project got significantly more difficult. Javascript's floating point nature doesnt usually cause too many issues, but with a calculator application, it matters. Simple calculations like "8.2 - 8" will yield "0.1999999999999993" instead of "0.2" and for a calculator, this is a problem! Typically one would round, but then with a calculator you must decide to what decimal place do you round? The gist is that although this project seemed easy to begin with, to use vanilla JS without the help of 3rd party math libraries became the bulk of the work. Each calculation essentially has to run and then be cleaned up with additional formatting functions to make the numbers look more like what a user would anticipate. I could have sunk SO much more time into perfecting that process, but I feel the calculator is feature complete and additional effort would more an excersize in whack-a-mole than a learning experience. I still like you Javascript, don't worry :)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## This App can be viewed at: <br>
https://reactcalc-mw.netlify.app/
