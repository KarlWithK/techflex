$(".oneButton").click(function () {
  let age = $(".age").val();
  let year = $(".year").val();
  let answer = year - age;
  $(".answerOne").text("They are either " + (answer - 1) + " or " + answer);
});

function getAge(age, year) {
  var answer = year - age;
  return "They are either " + (answer - 1) + " or" + answer;
}

$(".twoButton").click(function () {
  let mode = $(".mode").val();
  let num = $(".num").val();
  let answer;
  if (mode === "C") {
    answer = ((parseInt(num, 10) - 32) * 5) / 9;
    $(".answerTwo").text(answer);
  } else {
    answer = (parseInt(num, 10) * 9) / 5 + 32;
    $(".answerTwo").text(answer);
  }
});

// mode: either "C" or "F"
function tempConvert(mode, num) {
  if (mode === "C") {
    return ((num - 32) * 5) / 9;
  }
  return (num * 9) / 5 + 32;
}

$(".threeButton").click(function () {
  let one = $(".num1").val();
  let two = $(".num2").val();
  $(".answerThree").text(one > two ? one : two);
});

function biggerNum(num1, num2) {
  return num1 > num2 ? one : two;
}

$(".fourButton").click(function () {
  let num = $(".amount").val();
  let noun = $(".word").val();
  if (num > 1) {
    $(".answerFour").text(num + " " + noun + "s");
  } else {
    $(".answerFour").text(noun);
  }
});

function pluralize(num, noun) {
  if (num > 1) {
    return num + " " + noun + "s";
  }
  return noun;
}


$(".fiveButton").click(function () {
  const mode = $(".modeRan").val();
  const num = Math.floor(Math.random() * 100);
  let answer;
  if (mode === "C") {
    answer = (num - 32) * 5 / 9;
    $(".answerFive").text(answer);
  } else {
    answer = (parseInt(num, 10) * 9) / 5 + 32;
    $(".answerFive").text(answer);
  }
});
