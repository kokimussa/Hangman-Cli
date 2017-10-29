var Word = require("./word.js");


var Game = function(){
    this.hiddenWords = ['classical', 'pop', 'rock', 'jazz', 'country', 'rap'];
    this.randomWord = this.hiddenWords[ Math.floor(Math.random() * this.hiddenWords.length)];
    this.currentWord = new Word(this.randomWord);

}
var hangMan = new Game();

module.exports = Game;


