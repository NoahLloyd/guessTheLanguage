const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const correctSound = new Audio('../music/correct.mp3')
const incorrectSound = new Audio('../music/incorrect.mp3')
let language = 'Latin'
let soundsOn = true

const languageGuess = (languageGuessed) => {
  if (languageGuessed === language) {
    displayVerificationOfGuess(correct);
    return;
  }
  displayVerificationOfGuess(incorrect);
};

const displayVerificationOfGuess = (symbol) => {
  if (soundsOn) {
  symbol === correct ? correctSound.play() : incorrectSound.play()
  }
  symbol.classList.add("show");
  setTimeout(() => {
    symbol.classList.remove("show");
  }, 500);
};

const translateText =  async (text) => {
  const translation = await fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		"x-rapidapi-key": "4e61f42c50msha70b430044d92a4p109d6fjsnec3420902daf"
	},
	"body": {
		"q": "Hello, world!", 
		"target": "dk",
		"source": "en"
	}
})
const translationJson = await translation.json()
console.log(translationJson)
}


const toggleSounds = () => {
  soundsOn = !soundsOn
}
// translateText('asd')