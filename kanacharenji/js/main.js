var pk = "org.eu.muhrizki.kanacharenji";
var playables = localStorage.getItem(pk + ".stages");
var money = Number(localStorage.getItem(pk + ".money"));
var stages;

if(document.location.href.indexOf("/index.html") > -1){
  if(playables == null){
    stages = {
      trueOrFalse: 0,
      memoryGame: 0
    };
    localStorage.setItem(pk + ".stages", JSON.stringify(stages));
  }
  stages = JSON.parse(playables);
}

function $(query){
  return document.querySelector(query);
}

function buyStage(stage, price){
  if(money >= price){
    if(stage == 1){
      stages.trueOrFalse = 1;
    }
    else if(stage == 2){
      stages.memoryGame = 1;
    }
    money = money - price;
    localStorage.setItem(pk + ".stages", JSON.stringify(stages));
    localStorage.setItem(pk + ".money", money);
    document.location.reload();
  }
  else{
    alert("You need more " + Math.abs(money - price) + " coins to unlock this stage");
  }
}

var kata = "アイウエオカキクケコサシスセソタチツテトナニヌネノマミムメモハヒフヘホラリルレロワヲヤユヨンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
var hira = "あいうえおかきくけこさしすせそたちつてとなにぬねのまみむめもはひふへほらりるれろわをやゆよんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
var roma = "a i u e o ka ki ku ke ko sa shi su se so ta chi tsu te to na ni nu ne no ma mi mu me mo ha hi hu he ho ra ri ru re ro wa wo ya yu yo n ga gi gu ge go za ji zu ze zo da dji dzu de do ba bi bu be bo pa pi pu pe po";