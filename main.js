var inquirer = require('inquirer');
var game  =  require('./game.js');
var Word = require('./word.js');
var Letter = require('./letter.js');
var prompt = require('prompt');

prompt.start();


game = {
 	wordChoices: ['classical', 'pop', 'rock', 'jazz', 'country', 'rap'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWord: null,
 	
 	startGame: function (word) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordChoices[Math.floor(Math.random()* this.wordChoices.length)]);
 		this.currentWord.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWord.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWord.target);
 			} else {
 				console.log(self.currentWord.wordRender());
 			}
 		});

 	}


};

game.startGame();


