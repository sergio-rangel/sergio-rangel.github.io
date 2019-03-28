
let carX = 50;


function setup(){
  createCanvas(500, 500);
 }


function draw() {
  background(35, 20, 60, 10);


    if (carX > 500) {
      carX = -50;
    } else if (carX > 400) {
      carX += 6;
    } else {
      // carX = carX + 3;
      carX += 3;
    }



    // draw racecar body
    noStroke();
    fill(140, 60, 250)
    rect(carX, 300, 50, 30);
    triangle(carX, 75, carX, 20, 86, 75)

      fill(0);
      stroke(255);
      strokeWeight(5);
      ellipse(carX, 350, 20, 20)

}
