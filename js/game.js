const answer = Math.floor(Math.random() * 100) + 1;
// console.log(answer);

function checkValue() {
  let result = parseInt($("#number").val(), 10);
  if (result < answer) {
    $("#result").css("color", "red");
    $("#result").text("Too Low!");
  } else if (result > answer) {
    $("#result").css("color", "red");
    $("#result").text("Too High!");
  } else if (result === answer) {
    $("#result").css("color", "green");
    $("#result").text("You Guess Correctly!");
  } else {
    $("#result").text("Input a correct number");
  }
}
