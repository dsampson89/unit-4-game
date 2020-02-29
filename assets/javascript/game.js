$(document).ready(function(){
    //Target Number Variables 
var targetNumber= Math.floor(Math.random ()*101)+ 19
$("#targetNumber").text(targetNumber)


    //Hidden values for Crystal
var blueCrystal = Math.floor(Math.random()*11)+ 1;

var purpleCrystal = Math.floor(Math.random()*11)+ 1

var silverCrystal = Math.floor(Math.random()*11)+ 1

var yellowCrystal = Math.floor(Math.random ()*11)+ 1


//wins, losses and total score
var wins = 0


var losses= 0


var totalScore= 0

$("#wins").text("Wins:" + wins);

$("#losses").text("Losses:" + losses);

//click function for each crystal

$("#blueCrystal").on('click', function(){
    totalScore= totalScore + blueCrystal;
    $("#totalScore").text(totalScore)
});

$("#purpleCrystal").on('click', function(){
    totalScore= totalScore + purpleCrystal;
    $("#totalScore").text(totalScore)
});

$("#silverCrystal").on('click', function(){
    totalScore= totalScore + silverCrystal;
    $("#totalScore").text(totalScore)
});

$("#yellowCrystal").on('click', function(){
    totalScore= totalScore + yellowCrystal;
    $("#totalScore").text(totalScore)
});



















});