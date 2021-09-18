// The container of the text and extend icon
const text = document.getElementById("text");
const textBox = document.getElementById("textBox");
const extend = document.getElementById("extend");

let extended = false;
extend.addEventListener("click", () => {
  // text.style.transition = 'height 200ms ease'
  // text.style.height = 'auto'
  // textBox.style.transition = 'height 200ms ease'
  // textBox.style.height = 'auto'
  if (extended) {
      text.classList.remove("full-height-transition");
      textBox.classList.remove("full-height-transition");
      // Flips the extend icon
      extend.style.transform = 'rotate(360deg)'
      extended = false
  } else {
    textBox.classList.add("full-height-transition");
    text.classList.add("full-height-transition");
    // Flips the extend icon
    extend.style.transform = 'rotate(180deg)'
    extended = true
  }
});
