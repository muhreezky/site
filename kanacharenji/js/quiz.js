var time = 5;
var score = 0;
var correctAnswer = "";
var locStorage = localStorage.getItem(pk + ".quiz.highScore");
var interval = window.setInterval(function(){
  time = time - 1;
  $("#time").innerHTML = time;
  if(time == 0){
    gameOver();
  }
}, 1000);

function questionRandomize(){
  var katakana = kata.split("");
  var hiragana = hira.split("");
  var romaji = roma.split(" ");
  var index = Math.round(Math.random() * ((katakana.length-1) - 0) + 0);
  correctAnswer = katakana[index] + "," + hiragana[index] + "," + romaji[index];
  var correctChoice = Math.round(Math.random() * (4-1) + 1);
  var choices = "1234";
  var mode = Math.round(Math.random() * (2-0) + 0);
  var corr = correctAnswer.split(",");
  choices = choices.replace(String(correctChoice), "");
  $("#answer" + correctChoice).value = corr[mode];
  var answer = corr[mode];
  var aswr = corr.join(",").replace(answer, "0").split(",");
  aswr.splice(aswr.indexOf("0"), 1);
  choices = choices.split("");
  var lgth = choices.length-1;
  var ans;
  var modeAnswer = function(){
    var answer = Math.round(Math.random() * ((katakana.length-1) - 0) + 0);
    if(mode == 0){
      ans = katakana[answer];
    }
    else if(mode == 1){
      ans = hiragana[answer];
    }
    else{
      ans = romaji[answer];
    }
    
    if(correctAnswer.indexOf(ans) > -1){
      modeAnswer();
    }
  };
  var modeQuestion = function(){
    
  }
  while(lgth > -1){
    modeAnswer();
    $("#answer" + choices[lgth]).value = ans;
    lgth--;
  }
  var quest = Math.round(Math.random() * (1-0) + 0);
  $("#question").innerHTML = "&nbsp;&nbsp; " + aswr[quest] + "&nbsp; &nbsp;";
}

function gameOver(){
  time = 0;
  showDialog("1");
  if(locStorage == null){
    locStorage = localStorage.setItem(pk + ".quiz.highScore", "0");
  }
  if(score > Number(locStorage)){
    locStorage = localStorage.setItem(pk + ".quiz.highScore", String(score));
  }
  locStorage = localStorage.getItem(pk + ".quiz.highScore");
  $("#myHighScore").innerHTML = locStorage;
  var money = Number(localStorage.getItem(pk + ".money"));
  score = money + score;
  localStorage.setItem(pk + ".money", score);
  clearInterval(interval);
}

function correction(answer){
  var correct;
  if(correctAnswer.indexOf(answer) > -1){
    score = score + (Math.round(Math.random() * (3-1) + 1));
    $(".score").innerHTML = "&nbsp;<i class='fas fa-coins'></i> &nbsp;" + score + "&nbsp;";
    questionRandomize();
    $("#myScore").innerHTML = score;
    time = 6;
  }
  else{
    gameOver();
  }
}

window.onload = function(){
  questionRandomize();
};