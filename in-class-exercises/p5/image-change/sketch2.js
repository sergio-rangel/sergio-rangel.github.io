let image1;
let image2;

function setup(){
  image2 = "images/IMG_2868.jpg"
  image1 = document.querySelector("#image");
  setTimeout(changeImage, 3000);
}

function changeImage() {
    image1.src=image2;
}
