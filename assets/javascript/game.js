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

$("#wins").text(wins);

$("#losses").text(losses);

//click function for each crystal

$("#blueCrystal").on('click', function(){
    totalScore= totalScore + blueCrystal;
    $("#totalScore").text(totalScore)
    //condition
    if (totalScore == targetNumber){
        wins++;
        $("#wins").text(wins);
        reset()
    }
    else if (totalScore > targetNumber){
        losses++;
        $("#losses").text(losses)
        reset()
    }
});

$("#purpleCrystal").on('click', function(){
    totalScore= totalScore + purpleCrystal;
    $("#totalScore").text(totalScore)
    //condition
    if (totalScore == targetNumber){
        wins++;
        $("#wins").text(wins);
        reset()
    }
    else if (totalScore > targetNumber){
        losses++;
        $("#losses").text(losses)
        reset()
    }
});

$("#silverCrystal").on('click', function(){
    totalScore= totalScore + silverCrystal;
    $("#totalScore").text(totalScore)

    //condition
    if (totalScore == targetNumber){
        wins++;
        $("#wins").text(wins);
        reset()
    }
    else if (totalScore > targetNumber){
        losses++;
        $("#losses").text(losses)
        reset()
    }
});

$("#yellowCrystal").on('click', function(){
    totalScore= totalScore + yellowCrystal;
    $("#totalScore").text(totalScore)

    //condition
    if (totalScore == targetNumber){
        wins++;
        $("#wins").text(wins);
        reset()
    }
    else if (totalScore > targetNumber){
        losses++;
        $("#losses").text(losses)
        reset()
    }
});

//reset
function reset(){
    targetNumber= Math.floor(Math.random ()*101)+ 19;
    $("#targetNumber").text(targetNumber);
    
    blueCrystal = Math.floor(Math.random()*11)+ 1;
    purpleCrystal = Math.floor(Math.random()*11)+ 1;
    silverCrystal = Math.floor(Math.random()*11)+ 1;
    yellowCrystal = Math.floor(Math.random ()*11)+ 1;
    
    totalScore=0;
    $("#totalScore").text(totalScore);

}
























});