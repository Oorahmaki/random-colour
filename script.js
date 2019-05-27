const boxes = document.querySelectorAll(".box");
const button = document.getElementById("button");
const colours = ["red", "orange", "yellow", "green", "blue"];

button.addEventListener("click", function() {
  //   console.log(boxes);
  assignColours();
});

function randomColour() {
  const colourValue = Math.floor(Math.random() * 5);
  const colour = colours[colourValue];
  return colour;
}

function assignColours() {
  for (let i = 0; i < boxes.length; i++) {
    const newColour = randomColour();
    boxes[i].style.backgroundColor = newColour;
    // console.log(boxes[i]);
  }
}
