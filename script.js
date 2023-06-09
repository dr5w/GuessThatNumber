// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;

// For starting, restarting, and ending the game
let restartGame = true;

// For storing the range that the user will guess
let rangeNum;

// For storing the number that the user will attempt to guess
let randomNum;

// For storing the number of attempts the user has left
let attempts;

// For storing the user's guess
let guess;

// For storing the user's response to play again or NOT play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game`);

// Game restarts as long as the restartGame variable has a value of true
while (restartGame){
  // Asks user to enter a number to set the upper bound for the random number that will be created
  rangeNum = prompt(`Please enter a maximum number for the range`);

  // Using parseInt to attempt to convert the user's response into a number value
  rangeNum = parseInt(rangeNum);

  // Verifies the user's entry for the range number is a number greater than zero
  // NOTE: All numbers, positive or negative have a Boolean value of TRUE, except for zero which has a default Boolean value of FALSE. Also, NaN has a default Boolean value of FALSE.
  while (!rangeNum || rangeNum < 1){
    rangeNum = prompt(enterNumText);
    rangeNum = parseInt(rangeNum);
  }

  // Creates the random number using the range number entered by the user
  randomNum = Math.floor(Math.random() * rangeNum) + 1;
  // alert(`Random Number is: ${randomNum}`);

  // Prompts user to enter a number of attempts allowed (AKA Number of guesses)
  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  // Verifying the user's entry for a number of attempts allowed is a number greater than zero and one less than the range they set
  while (!attempts || attempts < 1 || attempts >= rangeNum){
    attempts = parseInt(prompt(`Please enter a number between 0 and ${rangeNum}`));
  }

  // Asks user to enter a guess in the range that they set
  guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);

  // Continues looping until the user guesses the correct number or runs out of attempts
  while (true){

    // Displays the number/answer when a code word is entered
    if (guess === `Mellon`){
      alert(`The number is ${randomNum}`);

      // Prompts the user to enter another guess
      guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
    }

    // Attempts to convert the user's guess into a number
    guess = parseInt(guess);

    // Verifies the user's guess is a number greater than zero and less than or equal to the range they set
    while (!guess || guess < 1 || guess > rangeNum){
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // Removes an attempt
    attempts--;

    // Checks if user guessed correctly. If so, then the game ends.
    if (guess === randomNum){
      alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
      break;

      // Checks if user has any attempts left. If not, then the game ends and the number is displayed to the user.
    } else if (attempts === 0){
      alert(`Sorry, but you have run out of attempts :( The number was ${randomNum}`);
      break;

      // Checks if user's guess was too low and prompts user to guess again
    } else if (guess < randomNum){
      guess = prompt(`Too low. You have ${attempts} attempt(s) left`);

      // The only other possibility is the user's guess was too high so the user is prompted again
    } else {
      guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
    }

    // break;
  }

  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

  // Loop continues until the user submits a valid response
  while (true){
    // Checks if the user's answer is no (AKA N or n)
    if (playAgain.toUpperCase() === `N`){
      // Alerts the user that the game is over and the game does NOT restart
      alert(`Thanks for playing!`);
      restartGame = false;
      break;

      // Checks if the user's answer is yes (AKA Y or y)
    } else if (playAgain.toUpperCase() === `Y`){
      // The game restarts
      break;

      // Prompts the user to enter a valid response and start the loop again
    } else {
      playAgain = prompt(`Please enter Y or N.`);
    }

    // break;
  }

  // break;
}
