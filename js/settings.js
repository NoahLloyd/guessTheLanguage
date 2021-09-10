const languageAmountChoiceDisplay = document.getElementById("languageAmountChoiceDisplay");
const languageAmountChoice = document.getElementById("languageAmountChoice");
const languageAmountDifficulty = document.getElementById('languageAmount-difficulty')
const languageAmountDisplayContainer = document.getElementById('languageAmountDisplay-container')

let language = "Danish";
const updateLanguageAmountDisplay = (value) => {
    // Handle attempts of setting less than 3 languages
    if (parseInt(value) < 3) {
        languageAmountChoice.value = '3';
        languageAmountChoiceDisplay.classList.add('language-choice-error')
        languageAmountDifficulty.textContent = valueDifficulty(parseInt(value))

        setTimeout(() => {
            languageAmountChoiceDisplay.textContent = languageAmountChoice.value
            languageAmountChoiceDisplay.classList.remove('language-choice-error')

        }, 2000)
    }
    // 
    languageAmountChoiceDisplay.textContent = value;
};

const valueDifficulty = (value) => {
    if (value < 15) {
        return "easy";
    }
    if (value < 25) {
        return "medium";
    }
    if (value < 50) {
        return "hard";
    }
    if (value < 75) {
        return "extreme";
    }
    return "ultimate";
};