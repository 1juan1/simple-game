//////////////the birds movement////////////////////////////
var xpos = 250
document.addEventListener("keydown", function(e) {
if (e.keyCode == 37) {
   document.getElementById("bird").setAttribute("x", xpos - 15)
  xpos = xpos - 15;
}

 else if (e.keyCode == 39) {
  document.getElementById("bird").setAttribute("x", xpos + 15)
  xpos = xpos + 15;
}
})


var ypos = 200
document.addEventListener("keydown", function(e) {
if (e.keyCode == 38) {
   document.getElementById("bird").setAttribute("y", ypos - 15)
  ypos = ypos - 15;
}

 else if (e.keyCode == 40) {
  document.getElementById("bird").setAttribute("y", ypos + 15)
  ypos = ypos + 15;
}
})

/////overlap///////
canvas.addEventListener(function (e) {
  var bird = document.getElementById("bird")
  var food = document.getElementById("taco")

  If(bird.x > food.x)
  {
    restart.annimation
  }
})
