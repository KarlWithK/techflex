function change() {
  var btn_text = $("#on-off").val();
  if (btn_text == "hide") {
    $("#advice-container").hide();
    $("#on-off").val("show");
    $("#on-off").html("Click Me to Show Advice");
  } else if (btn_text == "show") {
    $("#advice-container").show();
    $("#on-off").val("hide");
    $("#on-off").html("Click Me to Hide Advice");
  }
}

async function getAdvice() {
  let url = "https://api.adviceslip.com/advice";
  let respone = await fetch(url);
  if (respone.ok) {
    let data = await respone.json();
    return data;
  } else {
    throw new Error("There was an error getting advice", respone.statusText);
  }
}

async function main() {
  const advice = await getAdvice();
  $("#advice").text(advice.slip.advice);
}

main();
