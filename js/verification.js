const pointsLabel = document.getElementById('pointsLabel')
const points = document.getElementById('pointsNumber')
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const correctSound = new Audio('../audio/correct.mp3')
const incorrectSound = new Audio('../audio/incorrect.mp3')
let language = 'Latin'
let soundsOn = true

const displayVerificationOfGuess = (symbol) => {
  if (soundsOn) {
  symbol === correct ? correctSound.play() : incorrectSound.play()
  }
  symbol.classList.add("show");
  setTimeout(() => {
    symbol.classList.remove("show");
  }, 500);
};

const toggleSounds = () => {
    soundsOn = !soundsOn
}

const onGuess = (languageGuessed) => {
    if (languageGuessed === language) {
        displayVerificationOfGuess(correct)
        points.innerHTML = (parseInt(points.innerHTML) + Math.floor(Math.random() * 10) + 100).toString()
    } else {
    displayVerificationOfGuess(incorrect)
    points.innerHTML = (parseInt(points.innerHTML) + Math.floor(Math.random() * 10) + 40).toString()
    }
    newLanguageSetup()

}

const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")

const newLanguageSetup = () => {
  option1.innerHTML = languages[Math.floor(Math.random() * 100)]
  option2.innerHTML = languages[Math.floor(Math.random() * 100)]
  option3.innerHTML = languages[Math.floor(Math.random() * 100)]

};