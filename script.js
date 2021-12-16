// POKEMON GUESSING GAME

//create a variable 
//request api from pokemon site
// make a function to request data from the api
// make a submit and input
// randomly generate one of the pokemon ID's
// type the correct pokemon's name to win

/*
pull the whole pokemon list
to choose a pokemon
then pull that pokemons data
then pokemon img and name to be pulled 
then I want to display the name and img
then I want the have a input with a true or false 
checks name and input whatever I typed to be equal to pokemon name
then I want computer to tell me I got name correct and its equal to name I type

*/


//variables
let mainLink = `https://pokeapi.co/api/v2/pokemon?limit=151`
let totalPk
let detailData  
//element references
let $button = $(`button`);
let $input = $(`input`);
let $img = $(`.guessImg`);

// initial statement
loadFirst();



//functions

function loadFirst(){
$.ajax(mainLink).then(function (data){
    
     totalPk = data
     choosePokemon();
});
}



function generateIndex(){
 
    return Math.floor(Math.random() * ( totalPk.results.length - 0 + 1)) + 0;
}

 function choosePokemon(){
    // select the index to get access for the pokemon
    $.ajax(totalPk.results[generateIndex()]).then(function (detailedData){
        
        detailData = detailedData
    });

 }
 
 function render (pokeData){
    
    $(`div`).html(`<img src = "${detailData.sprites.other["official-artwork"].front_default}">`)
 }

 $button.on(`click`, function(evt){
     evt.preventDefault();
     
     if($input.val().toLowerCase() == detailData.name.toLowerCase()){
        console.log (`true`)
        alert(`You got it!`)
        location.reload();
    }
    else{ ($input.val() != detailData.name) 
        alert(`Better luck next time`)
         console.log(`false`)
         location.reload();
     }
 })

 $img.on(`click`, function(){
     render()
 })
 //when correct the page reloads

//  official-artwork
//  name
