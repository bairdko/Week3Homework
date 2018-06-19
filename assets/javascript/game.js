

// Make variables
var guessesLeft = 15;
var guessesTaken = 0;
var guessHolder = [];
var letters;
var alphabet = ["a","b","c","d","e","f","h","i","j","k","l",
                "m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


//make objects
var hangman = {
  breweries: ["community", "deep ellum", "jester king"],
  hints: ["Hint 1","Hint 2","Hint 3"],
  brewIndex: 0,


  //choose word to use by choosing index
  chooseBrewery: function(){
    this.brewIndex = Math.floor(Math.random()* this.breweries.length);
    
    //test that this is working
    //console.log(this.brewIndex);
  },

  //create the blanks that you need to fill in 
  makeBlanks: function(){
    var hangmanText = document.getElementById("hangmanText");
    var clueText = document.getElementById("clueText");
    var blanks = "_";
    var wordChosen = this.breweries[this.brewIndex];

    //display corrisponding hint
    clueText.textContent = this.hints[this.brewIndex];

    // build blanks
    for(var i = 1; i < wordChosen.length; i++){
      if(wordChosen.charAt(i) === " "){
        blanks = blanks + " ";
      }
      else{
        blanks = blanks + "_";
      }

    //end of for
    }

    //testing
    console.log(blanks);


    //replae text
    hangmanText.textContent = blanks;

  //end of makeBlanks
  },



//end of hangman object
};

hangman.chooseBrewery();
hangman.makeBlanks();


// on key up
document.onkeyup = function(event){

  //Determines which key was pressed
  var userGuess = event.key;

  //grabs elements by id
  var userText = document.getElementById("guessText");
  var numGuess = document.getElementById("guessesLeft");

  //fills guess holder if guess hasn't been taken
  if (!guessHolder.includes(userGuess) ){
    
    //updates text count
    guessesLeft--;
    numGuess.textContent = guessesLeft;
  
    //fills guessHolder array with guesses taken
    guessHolder[guessesTaken] = userGuess;
    guessesTaken ++;
  
    //outputs array
    for (var i = 0; i < guessHolder.length; i++){
      letters = guessHolder[i] + " ";
    }

    userText.textContent = guessHolder.join(" ");
  //end if
  }
  
};