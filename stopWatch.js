var name = prompt("Enter Your Name:");
if (name === "") {
  name = "Mohsin";
  document.getElementById("userName").innerHTML =
    name + "'s" + " " + "StopWatch";
} else {
  document.getElementById("userName").innerHTML =
    name + "'s" + " " + "StopWatch";
}

var milisec = 0;
var sec = 0;
var min = 0;

function stopWatch() {
  var milsecValue = document.getElementById("milisec");
  milsecValue.innerHTML = ++milisec;
  if (milisec > 99) {
    var secValue = document.getElementById("sec");
    secValue.innerHTML = ++sec;
    milisec = 0;
  } else if (sec > 59) {
    var minValue = document.getElementById("min");
    minValue.innerHTML = ++min;
    sec = 0;
  }
}

var stopInterval;
function start() {
  stopInterval = setInterval(stopWatch, 10);
}

function pause() {
  clearInterval(stopInterval);
}

function reset() {
  milisec = 0;
  sec = 0;
  min = 0;
  var minValue = document.getElementById("min");
  minValue.innerHTML = min;
  var secValue = document.getElementById("sec");
  secValue.innerHTML = sec;
  var milsecValue = document.getElementById("milisec");
  milsecValue.innerHTML = milisec;
}

var lapValue;
function lap() {
  lapValue = " " + min + ":" + sec + ":" + milisec;
  document.getElementById("lapT").innerHTML =
    '<div class="alert alert-info font-weight-bold" role="alert">Lap Time:' +
    " " +
    lapValue +
    "</br> By: " +
    name +
    "</div>";
}
