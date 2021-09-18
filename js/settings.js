const languageAmountChoiceDisplay = document.getElementById("languageAmountChoiceDisplay");
const languageAmountChoice = document.getElementById("languageAmountChoice");
const languageAmountDifficulty = document.getElementById('languageAmount-difficulty')
const languageAmountDisplayContainer = document.getElementById('languageAmountDisplay-container')
const languageAmountError = document.getElementById('languageAmountError')


const updateLanguageAmountDisplay = (value) => {
    // Handle attempts of setting less than 3 languages
    if (parseInt(value) < 3) {  
        languageAmountChoice.value = '3'
        value = '3'
        languageAmountDifficulty.textContent = 'Min 3'
        
        // Do the rest but with a timeout to give time to read
        // Also adds a red color to emphasize that there has to be minimum 3 languages
        setTimeout(() => {
            languageAmountChoiceDisplay.textContent = value;
            difficulty = valueDifficulty(parseInt(value))
            languageAmountDifficulty.textContent = difficulty
            languageAmountDifficulty.classList.remove('easy', 'medium', 'hard', 'extreme', 'ultimate')
            languageAmountDifficulty.classList.add(difficulty)
        },1000)
        return
    }

    // Normal handler, executes all times but when there is chosen less than 3 languages
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

languageAmountChoice.addEventListener('change', () => {updateLanguageAmountDisplay(languageAmountChoice.value)})

// TODO: Add more settings. Ideas: Choose specific regions (Europe, Africa, Asia), Color settings?, Share somewhere (facebook, twitter)