/* 
	This is the JavaScript file for
	the Bowling Tracker Website

	Author: Jeffery Rice
	Date: March 22, 2017
	
	filename: tracker.js
*/

"use strict"; // interpret document contents in JavaScript strict mode

// global variables
var seriesTotal = 0;
var seriesAverage = 0;
var gameScores = new Array();
var highGame;
var lowGame;
var numOfGames;

// this will add user entered games into the gameScores array
function addGame() {
	gameScores.push(document.getElementById("gameScore").value);
	document.getElementById("gameScore").value = "";
}

function displayHiLowScore() {
	highGame = Math.max.apply(null,gameScores);
	lowGame = Math.min.apply(null,gameScores);
}

// this will calculate the average score of all items entered into gameScores array
// and display average with an alert box
function calculateAverageGame() {
	for (var i = 0; i < gameScores.length; i++) {
		seriesTotal += parseInt(gameScores[i]);
		displayHiLowScore();
		countGames();
	}
	seriesAverage = seriesTotal / gameScores.length;
	alert("The series average is: " + seriesAverage.toFixed(2));
}

function countGames() {
	numOfGames = gameScores.length;
	return numOfGames;
}

function displayStats() {
	alert("Number of games: " + numOfGames +
		  "\nTotal Pinfall: " + seriesTotal +
		  "\nSeries Average: " + seriesAverage.toFixed(2) +
		  "\nHigh Game: " + highGame);
}

// creates event listeners for click methods
function createEventListeners() {
	var eachGame = document.getElementById("addGame");
	if (eachGame.addEventListener) {
		eachGame.addEventListener("click", addGame, false);
	} else if (eachGame.attachEvent) {
		eachGame.attachEvent("onclick", addGame);
	}
	
	var calculateAverage = document.getElementById("calculate");
	if (calculateAverage.addEventListener) {
		calculateAverage.addEventListener("click", calculateAverageGame, false);
	} else if (calculateAverage.attachEvent) {
		calculateAverage.attachEvent("onclick", calculateAverageGame);
	}
	
	var calcStatistics = document.getElementById("calcStats");
	if (calcStatistics.addEventListener) {
		calcStatistics.addEventListener("click", displayStats, false);
	} else if (calcStatistics.attachEvent) {
		calcStatistics.attachEvent("onclick", displayStats);
	}
}

 if (window.addEventListener) {
	 window.addEventListener("load", createEventListeners, false)
 } else if (window.attachEvent) {
	 window.attachEvent ("onload", createEventListeners)
 }