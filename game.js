let playerPattern = [];
let generatedPattern =[];
let n = 3;
function start() {
  document.getElementById("score").innerHTML=`LEVEL: ${n-2}`;
  // show generated pattern
   generatedPattern = prepareList(n);
  let j = 0;

  var interval = setInterval(function () {
    flashButton(generatedPattern[j]);
    j++;
    if (j == n) clearInterval(interval);
  }, 1000);
  //  compare the two arrays pattern and playerPattern
  setTimeout(function(){
    if (compare(generatedPattern, playerPattern)) {
      document.getElementById("message").innerHTML = "KEEP GOING !";
      nextLevel();
  start();
    }
    else { document.getElementById("message").innerHTML = "GAME OVER"; }
  

  }, n*2000);
}

 function nextLevel(){
   
   playerPattern = [];
   generatedPattern =[];
      generatedPattern.length=0;
      n++;
 }

// comparison function
function compare(a, b) {
  let k = 1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) k = 0;
  }
  if (k == 0) return false;
  else return true;
}

// katgenerer liste d n-element 3amra b smiyat dl botonat aleatoire
function prepareList(n) {
  var pattern = [];
  for (let i = 0; i < n; i++) {
    var button_id = "button" + (Math.floor(Math.random() * 4) + 1);
    pattern.push(button_id);
  }
  console.log(pattern);
  return pattern
}


function savePlayerPattern(playerPattern,button_id){
  playerPattern.push(button_id);
  console.log(playerPattern);
  return playerPattern
}

function flashButton(ButtonId) {
  var button = document.getElementById(ButtonId);
  console.log("adding flash");
  button.classList.add("flash");
  setTimeout(function () {
    button.classList.remove("flash");
    console.log("removing flash");
  }, 500);
}
