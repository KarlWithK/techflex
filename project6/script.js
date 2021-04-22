let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "rock.png";

imgArray[1] = new Image();
imgArray[1].src = "paper.png";

imgArray[2] = new Image();
imgArray[2].src = "scissors.png";

imgArray[3] = new Image();
imgArray[3].src = "lizard.jpg";

imgArray[4] = new Image();
imgArray[4].src = "spock.jpg";

function computerChoice() {
  return Math.floor(Math.random() * 5);
}

function checkResult(userChoice) {
  let compChoice = computerChoice();

  //Win
  // rock beats scissors and lizard
  // paper beats rocks and spock
  // scissors beats paper and lizard
  // lizard beats papers and spock
  // spock beats scissors and rock

  if (
    (userChoice == 0 && compChoice == 2) ||
    (userChoice == 0 && compChoice == 3) ||
    (userChoice == 1 && compChoice == 0) ||
    (userChoice == 1 && compChoice == 4) ||
    (userChoice == 2 && compChoice == 1) ||
    (userChoice == 2 && compChoice == 3) ||
    (userChoice == 3 && compChoice == 1) ||
    (userChoice == 3 && compChoice == 4) ||
    (userChoice == 4 && compChoice == 0) ||
    (userChoice == 4 && compChoice == 2)
  ) {
    $(".result").text("You Win!");
  }
  //Lose
  else if (
    (compChoice == 0 && userChoice == 2) ||
    (compChoice == 0 && userChoice == 3) ||
    (compChoice == 1 && userChoice == 0) ||
    (compChoice == 1 && userChoice == 4) ||
    (compChoice == 2 && userChoice == 1) ||
    (compChoice == 2 && userChoice == 3) ||
    (compChoice == 3 && userChoice == 1) ||
    (compChoice == 3 && userChoice == 4) ||
    (compChoice == 4 && userChoice == 0) ||
    (compChoice == 4 && userChoice == 2)
  ) {
    $(".result").text("You Lose!");
  }
  //Tie
  else {
    $(".result").text("Tie!");
  }
  displayChoices(userChoice, compChoice);
  // console.log(userChoice, compChoice);
}

function displayChoices(userChoice, computerChoice) {
  $("#playerChoice").attr("src", imgArray[userChoice].src);

  $("#computerChoice").attr("src", imgArray[computerChoice].src);
}