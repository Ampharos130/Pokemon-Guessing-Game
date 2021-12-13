// POKEMON GUESSING GAME

//create a variable 
//request api from pokemon site
// make a submit and input
// randomly generate one of the pokemon ID's
// type the correct pokemon's name to win


//variables
const url =`https://pokeapi.co/api/v2/pokemon?limit=151`;
let totalPokemon = [];


//element references
const $button = $(`button`);
const $input = $(`input[type="text"]`);


// event listeners
$button.on(`click`, handleGetData);
startup();


//functions
// load the data

function startup(){
    
    $.ajax(url).then(
        function (data){
         //    render(data);
         data.results.forEach(element =>{
             let temp = [];
             
             temp.push(element.name);
             temp.push(element.url);
             totalPokemon.push(temp)
         })
         console.log(totalPokemon)
         rngPokemon();
        },
        function (error) {
            console.log(`something went wrong`);
            console.log(error);
        }
    );
}

function handleGetData(evt) {
    evt.preventDefault()
   const userInput = $input.val();
//    if (!userInput) return;

   $input.val(``);

   $.ajax(url + userInput).then(
       function (data){
        //    render(data);
        console.log(data)
       },
       function (error) {
           console.log(`something went wrong`);
           console.log(error);
       }
   );
}

// choose a random pokemon
function rngPokemon(){
    return Math.floor(Math.random() * (totalPokemon.length - 0 + 1)) + 0;
}


// access the rng'd pokemons specific info

// choose the url
// choose the "official-artwork"

