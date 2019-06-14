$(document).ready(function() {
  // Global vars 
var wins ; 
var loses ;
var randomNum = Math.floor(Math.random()*120) + 19;
var randomCrystalNum = Math.floor(Math.random()*12) + 1;
var crystalScore ;

// random num and start of the game 
$('#generatedNum').html(randomNum);

// random crystal value 

$('.btn-img').on('click', function() {
   parseInt( $('#totalScore').html(randomCrystalNum).val() );
   
  
});


// $('button#redCrystal').on('click', function() {
//   $('#totalScore').html(randomCrystalNum);
// });
// $('button#blueCrystal').on('click', function() {
//   $('#totalScore').html(randomCrystalNum);
// });
// $('button#purpleCrystal').on('click', function() {
//   $('#totalScore').html(randomCrystalNum);
// });
// $('button#greenCrystal').on('click', function() {
//   $('#totalScore').html(randomCrystalNum);
// });


// add the values to all buttons 






})




