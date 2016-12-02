var canvas =  document.getElementById("canvas")
var foodeaten = 0;
var timeStart = Date.now()
var endTime;
function randomNumberGenerator(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}


//////////////the birds movement////////////////////////////
var xpos = 250
var ypos = 200
document.addEventListener("keydown", function(e) {
if (e.keyCode == 37) {
   document.getElementById("bird").setAttribute("x", xpos - 15)
  xpos = xpos - 15;
}

 else if (e.keyCode == 39) {
  document.getElementById("bird").setAttribute("x", xpos + 15)
  xpos = xpos + 15;
}
else if (e.keyCode == 38) {
   document.getElementById("bird").setAttribute("y", ypos - 15)
  ypos = ypos - 15;
}

 else if (e.keyCode == 40) {
  document.getElementById("bird").setAttribute("y", ypos + 15)
  ypos = ypos + 15;
}

// check for overlap

var bird1 = document.getElementById("bird");
var taco = document.getElementById("taco");
var taco1 = document.getElementById('taco2');

var birdx = Number(bird1.getAttribute("x"));
var birdy = Number(bird1.getAttribute("y"));

//first food
var foodx = Number(taco.getAttribute("x"));
var foody = Number(taco.getAttribute("y"));
var foodwidth = Number(taco.getAttribute("width"));
var foodheight = Number(taco.getAttribute("height"));

//second food
var foodx1 = Number(taco1.getAttribute("x"));
var foody1 = Number(taco1.getAttribute("y"));
var foodwidth1 = Number(taco1.getAttribute("width"));
var foodheight1 = Number(taco1.getAttribute("height"));
var timeStart = Date.now();


var random = randomNumberGenerator(1,300);

if (birdx > foodx && birdx < foodx + foodwidth && birdy > foody &&  birdy < foody + foodheight) {
  taco.setAttribute("y", random);
  console.log("overlap");
  var random = randomNumberGenerator(1,300)
  document.getElementById("taco").setAttribute("x",random)
  foodeaten = foodeaten + 1;
  document.getElementById("score").textContent = foodeaten;

}



 if (birdx > foodx1 && birdx < foodx1 + foodwidth1 && birdy > foody1 &&  birdy < foody1 + foodheight1) {
  console.log('overlap');
    taco2.setAttribute("y", random);
    var random = randomNumberGenerator(1,300)
    document.getElementById("taco").setAttribute("x",random)
    foodeaten = foodeaten + 1;
      document.getElementById("score").textContent = foodeaten;


}

if(foodeaten == 3) {
document.getElementById("score").textContent = foodeaten;
document.getElementById("canvas").pauseAnimations()
  var timestop =  Date.now();
  endTime = (timestop - timeStart)/1000
  document.getElementById("time2").textContent = endTime;
}
})



/////overlap///////
