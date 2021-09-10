const languageAmountChoiceDisplay = document.getElementById("languageAmountChoiceDisplay");
const languageAmountChoice = document.getElementById("languageAmountChoice");
const languageAmountDifficulty = document.getElementById('languageAmount-difficulty')
const languageAmountDisplayContainer = document.getElementById('languageAmountDisplay-container')
const languageAmountError = document.getElementById('languageAmountError')

let language = "Latin";
const updateLanguageAmountDisplay = (value) => {
    // Handle attempts of setting less than 3 languages
    if (parseInt(value) < 3) {
        languageAmountChoice.value = '3';


        languageAmountChoiceDisplay.style.display = 'none'
        languageAmountError.style.display = 'block'
            
        setTimeout(() => {
            languageAmountChoiceDisplay.style.display = 'inline-block'
            languageAmountChoiceDisplay.textContent = languageAmountChoice.value
        languageAmountError.style.display = 'none'

        }, 2000)
    }
    // 
    languageAmountChoiceDisplay.textContent = value;
    const difficulty = valueDifficulty(parseInt(value))
    languageAmountDifficulty.textContent = difficulty
    languageAmountDifficulty.classList.remove('easy', 'medium', 'hard', 'extreme', 'ultimate')
    languageAmountDifficulty.classList.add(difficulty)
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