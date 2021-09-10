const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const langaugeAmountChoiceDisplay = document.getElementById("langaugeAmountChoiceDisplay");
const langaugeAmountChoice = document.getElementById("languageAmountChoice");

let language = "Danish";

const updateLanguageAmountDisplay = (value) => {
  langaugeAmountChoiceDisplay.textContent = value;
  langaugeAmountChoiceDisplay.textContent += `: ${valueDifficulty(parseInt(value))}`;
};

const valueDifficulty = (value) => {
  if (value < 15) {
    return "Easy";
  }
  if (value < 25) {
    return "Medium";
  }
  if (value < 50) {
    return "Hard";
  }
  if (value < 75) {
    return "Extreme";
  }
  return "Ultimate";
};

const languageGuess = (languageGuessed) => {
  if (languageGuessed === language) {
    displayVerificationOfGuess(correct);
    return;
  }
  displayVerificationOfGuess(incorrect);
};

const displayVerificationOfGuess = (symbol) => {
  symbol.classList.add("show");
  setTimeout(() => {
    symbol.classList.remove("show");
  }, 500);
};
