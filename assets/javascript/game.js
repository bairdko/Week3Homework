

// Make variables
var guessesLeft = 15;
var guessesTaken = 0;
var guessHolder = [];
var letters;
var wordChosen;



//make objects
var hangman = {
  breweries: ["community", "deep ellum", "jester king"],
  hints: ["Hint 1","Hint 2","Hint 3"],
  brewIndex: 0,
  blanks: "_",
  //locations
  hangmanText: document.getElementById("hangmanText"),      



  //choose word to use by choosing index
  chooseBrewery: function(){
    this.brewIndex = Math.floor(Math.random()* this.breweries.length);

    wordChosen = this.breweries[this.brewIndex];   
    
    //test that this is working
    console.log(this.brewIndex);
    console.log(wordChosen);
  },

  //create the blanks that you need to fill in 
  makeBlanks: function(){
    
    //hint location
    var clueText = document.getElementById("clueText"); 

    //display corrisponding hint
    clueText.textContent = this.hints[this.brewIndex];

    // build blanks
    for(var i = 1; i < wordChosen.length; i++){
      if(wordChosen.charAt(i) === " "){
        this.blanks = this.blanks + " ";
      }
      else{
        this.blanks = this.blanks + "_";
      }

    //end of for
    }

    //testing
    console.log(this.blanks);

    //replace text
    this.hangmanText.textContent = this.blanks;

  //end of makeBlanks
  },

  //to fill in letters
  testLetter: function(char){

    for(var i = 0; i < wordChosen.length; i++){

      if(wordChosen.charAt(i) === char){

        this.blanks = this.blanks.substr(0, i) + char + this.blanks.substr(i + char.length);

      }
    //end of for
    }

    console.log(this.blanks);

    //replace content with guessed characters
    this.hangmanText.textContent = this.blanks;

  //end of test letter
  },



//end of hangman object
};

//set up game
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
  
    //test the letter
    hangman.testLetter(userGuess);

    //end if
  }
  
};