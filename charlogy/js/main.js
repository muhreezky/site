// JavaScript Document
var score = 0;
var time = 5;
var lives = 3;
var recentHiScore = getHiScore();

function $(query){
  return document.querySelector(query);
}

function getCurURIQueries(){
  var url = document.location.href;
  if(url.indexOf("?") != -1){
    var first = url.split("?");
    var queries;
    var queryValue;
    if(first[1].indexOf("&") != -1){
      queries = first[1].split("&");
    }
    else{
      queries = first[1];
    }
    return queries;
  }
  else{
    return url;
  }
}

function setHiScore(score){
  localStorage.setItem("asciiquiz.hiscore", score);
}

function getHiScore(){
  return localStorage.getItem("asciiquiz.hiscore");
}

function showDialog(id){
	$("#dialogBg" + id).style.display = "block";
	$("#dialog" + id).style.display = "block";
}
	
function exitDlg(id){
	$("#dialogBg" + id).style.display = "none";
	$("#dialog" + id).style.display = "none";
}
	
function loadQuestion(){
  var charCode;
  var mode = Math.round(Math.random() * (3-1) +1);
  if(mode == 1){
    charCode = Math.random() * (90-65) + 65;
  }
  else if(mode == 2){
    charCode = Math.random() * (122-97) + 97;
  }
  else{
    charCode = Math.random() * (57-48) + 48;
  }
  var choices = [1, 2, 3, 4];
  $("#charBar").value = String.fromCharCode(Math.round(charCode));
  var ran = Math.round(Math.random() * (3-0) + 0);
  var correct = choices.splice(ran, 1);
  var wrong = (function(){
    var corChoice = correct.toString();
    var wrongChoices = choices.toString();
    var finalResult = wrongChoices.replace(corChoice).split(",");
    return finalResult;
  })();
  $("#choice" + correct).value = $("#charBar").value.charCodeAt(0);
  var correctChoice = $("#charBar").value.charCodeAt(0);
  for(i=0; i<3; i++){
    $("#choice" + wrong[i]).value = Math.round(Math.random() * ((correctChoice-2)-15) + 15);
  }
}

function newQuestion(){
  $("#timeBar").textContent = 5;
  time = 5;
  loadQuestion();
}

function correct(value){
  var charCode = $("#charBar").value.charCodeAt(0);
  if(value == charCode){
    score += 1;
    $("#scoreBar").textContent = score;
    newQuestion();
  }
  else{
    lives -= 1;
    if(lives == 0){
      showDialog("1");
      $("#myScore").textContent = score;
    }
    $("#lifeBar").textContent = lives;
    newQuestion();
  }
}

if(document.location.href.indexOf("play.html") != -1){
window.setInterval(function(){
  time -= 1;
  if(time == 0){
    if(lives > 0){
      newQuestion();
      lives -= 1;
    }
    else{
      
    }
  }
  var life = $("#lifeBar").textContent;
  if(lives == 0){
    showDialog("1");
    $("#myScore").textContent = score;
    $("#myHighScore").textContent = recentHiScore;
    $("#lifeBar").textContent = 0;
    $("#timeBar").textContent = 0;
    if(score > getHiScore()){
      setHiScore(score);
      $("#showIfHiScore").style.display = "inline";
    }
  }
  else{
    $("#lifeBar").textContent = lives;
    $("#timeBar").textContent = time;
  }
}, 1000);
}

window.onselectstart = function(event){
  event.preventDefault();
};