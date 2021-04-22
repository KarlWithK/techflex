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
