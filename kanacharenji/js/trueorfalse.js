var time = 3;
var score = 0;
var current = "";
var question;
var corr;
var correctAnswer;
var trueFalse;
var locStorage = localStorage.getItem(pk + ".trueorfalse.highScore");

var interval = window.setInterval(function(){
  time = time - 1;
  $("#time").innerHTML = time;
  if(time == 0){
    gameOver();
  }
}, 1000);

function gameOver(){
  time = 0;
  showDialog("1");
  clearInterval(interval);
  if(locStorage == null){
    localStorage.setItem(pk + ".trueorfalse.highScore", "0");
  }
  if(score > Number(locStorage)){
    localStorage.setItem(pk + ".trueorfalse.highScore", String(score));
  }
  locStorage = localStorage.getItem(pk + ".trueorfalse.highScore");
  $("#myHighScore").innerHTML = locStorage;
  var money = Number(localStorage.getItem(pk + ".money"));
  money = money + score;
  localStorage.setItem(pk + ".money", String(money));
}

function correction(answer){
  var correct;
  if(correctAnswer.indexOf(answer) > -1){
    score = score + (Math.round(Math.random() * (2-1) + 1));
    $(".score").innerHTML = "&nbsp;<i class='fas fa-coins'></i> &nbsp;" + score + "&nbsp;";
    time = 1;
    $("#time").innerHTML = time;
    questionRandomize();
    $("#myScore").innerHTML = score;
  }
  else{
    gameOver();
  }
}

function questionRandomize(){
  var katakana = kata.split("");
  var hiragana = hira.split("");
  var romaji = roma.split(" ");
  var index = Math.round(Math.random() * ((katakana.length-1) - 0) + 0);
  correctAnswer = katakana[index] + ", " + hiragana[index] + ", " + romaji[index];
  var wrongIndex = index + Math.round(Math.random() * (5+5)-5);
  var wrongAnswer = katakana[wrongIndex] + ", " + hiragana[wrongIndex] + ", " + romaji[wrongIndex];
  var cha = Math.round(Math.random() * (2-0) + 0);
  correctAnswer = correctAnswer.split(", ");
  question = correctAnswer[cha];
  corr = correctAnswer.join(", ").replace(question, "0").split(", ");
  corr.splice(corr.indexOf("0"), 1);
  var wr = wrongAnswer.split(", ");
  wr.splice(cha, 1);
  var rnd = Math.round(Math.random() * (1-0) + 0);
  trueFalse = Math.round(Math.random() * (1-0) + 0);
  $("#question").innerHTML = "&nbsp;" + question + "&nbsp;";
  if(trueFalse == 0){
    corr = wr[rnd];
    if(corr == "undefined"){
      corr = corr[rnd];
    }
  }
  else if(trueFalse == 1){
    corr = corr[rnd];
  }
  console.log(trueFalse);
  $("#question2").innerHTML = "&nbsp;" + corr + "&nbsp;";
}

function correction(boo){
  var text1 = question;
  var text2 = corr;
  var correct;
  if(trueFalse > 0){
    correct = true;
  }
  else{
    correct = false;
  }
  
  if(boo == correct){
    score = score + (Math.round(Math.random() * (3-1) + 1));
    $("#coins").innerHTML = score;
    questionRandomize();
    $("#myScore").innerHTML = score;
    time = 4;
  }
  else{
    gameOver();
  }
}

window.onload = function(){
  questionRandomize();
};