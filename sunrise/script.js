let correction = [4, 5, 6, 7];

function convertToTimeZone(utc, index) {
  let utcHours = utc.substr(0, utc.indexOf(":"));
  let utcMinSec = utc.substr(utc.indexOf(":") + 1, utc.indexOf(" ") - 2);
  let utcAP = utc.substr(utc.indexOf(" "));

  let time = parseInt(utcHours, 10) - correction[index];
  if (time < 0) {
    time = 12 + time;
    if (utcAP == " AM") {
      utcAP = "PM";
    } else if (utcAP == " PM") {
      utcAP = "AM";
    }
  }

  if (utcHours >= 12) {
    if (utcAP == " AM") {
      utcAP = "PM";
    } else if (utcAP == " PM") {
      utcAP = "AM";
    }
  }
  time += ":" + utcMinSec + utcAP;
  return time;
}

function main() {
  let lat;
  let lng;
  let correction_index;
  if (!$(".corr").val()) {
    correction_index = 0;
  } else {
    correction_index = $(".corr").val();
  }
  if (!$(".lat").val()) {
    lat = "40.650850";
  } else {
    lat = $(".lat").val();
  }
  if (!$(".lng").val()) {
    lng = "-73.948570";
  } else {
    lng = $(".lng").val();
  }
  let url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $("#sunrise").text(
        convertToTimeZone(data.results.sunrise, correction_index)
      );
      $("#sunset").text(
        convertToTimeZone(data.results.sunset, correction_index)
      );
    });
}
