var canvas =  document.getElementById("canvas")




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
canvas.addEventListener("click" ,function (e) {
  var bird1 = document.getElementById.attribute("bird")
  var taco1 = document.getElementById.attribute("taco")

birdx = Number(bird1.getAttribute("x"))
birdy = Number(bird1.getAttribute("y"))

foodx = Number(taco1.getAttribute("x"))
foody = Number(taco1.getAttribute("y"))

  if (birdx  > foodx && birdx < foodx + width)
  {

    taco1.setAttribute("begin", "food1.end")
  
  }
})
