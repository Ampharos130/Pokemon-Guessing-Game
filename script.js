// POKEMON GUESSING GAME

//create a variable 
//request api from pokemon site
// make a submit and input
// randomly generate one of the pokemon ID's
// type the correct pokemon's name to win


//variables
const $URL =`https://pokeapi.co/api/v2/pokemon/{id or name}/`


//element references
const $input = $(`form`);
const $form = $(`input[type="text"]`);


// event listeners
$form.on(`submit`, handleGetData);



//functions

function handleGetData(evt) {
   
}



