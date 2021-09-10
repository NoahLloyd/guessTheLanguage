const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");

let language = "Danish";

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
