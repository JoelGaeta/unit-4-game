var randomNumber = Math.floor(Math.random() * 50);
$("#random-number").html(randomNumber);

var blueGemValue = Math.floor(Math.random() * 10 + 1);
var greenGemValue = Math.floor(Math.random() * 10 + 1);
var redGemValue = Math.floor(Math.random() * 10 + 1);
var purpleGemValue = Math.floor(Math.random() * 10 + 1);
var win = 0;
var lose = 0;
var finalScore;

function reset() {
  var randomNumber = Math.floor(Math.random() * 50);
  var blueGemValue = Math.floor(Math.random() * 10 + 1);
  var greenGemValue = Math.floor(Math.random() * 10 + 1);
  var redGemValue = Math.floor(Math.random() * 10 + 1);
  var purpleGemValue = Math.floor(Math.random() * 10 + 1);
  var currentValue = 0;

  $("#random-number").html(randomNumber);
  $("#shit").text(currentValue);
  start();
}
function start() {
  var randomNumber = Math.floor(Math.random() * 50);
  var blueGemValue = Math.floor(Math.random() * 10 + 1);
  var greenGemValue = Math.floor(Math.random() * 10 + 1);
  var redGemValue = Math.floor(Math.random() * 10 + 1);
  var purpleGemValue = Math.floor(Math.random() * 10 + 1);

  $("#random-number").html(randomNumber);
}

$("#bluegem").on("click", function() {
  var currentValue = parseInt($("#shit").text());
  var newValue = currentValue + blueGemValue;
  $("#shit").text(newValue);
  checkIfGamesOver();
});
$("#greengem").on("click", function() {
  var currentValue = parseInt($("#shit").text());
  var newValue = currentValue + greenGemValue;
  $("#shit").text(newValue);
  checkIfGamesOver();
});
$("#redgem").on("click", function() {
  var currentValue = parseInt($("#shit").text());
  var newValue = currentValue + redGemValue;
  $("#shit").text(newValue);
  checkIfGamesOver();
});
$("#purplegem").on("click", function() {
  var currentValue = parseInt($("#shit").text());
  var newValue = currentValue + purpleGemValue;
  $("#shit").text(newValue);
  checkIfGamesOver();
});

function checkIfGamesOver() {
  if (parseInt($("#shit").text()) === randomNumber) {
    alert("you win the game!");
    win++;
    $("#wins").html(win);
    reset();
  } else if (parseInt($("#shit").text()) > randomNumber) {
    alert("you lose!");
    lose++;
    $("#loses").html(lose);
    reset();
  }
}
