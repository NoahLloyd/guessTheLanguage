const getRandomPerson = async () => {
  const response = await fetch("https://api.randomuser.me/");
  if (response.ok) {
    // Get username
    const person = await response.json();
    const firstName = person.results[0].name.first;
    const lastName = person.results[0].name.last;
    const username = person.results[0].login.username;
    return [firstName, lastName, username];
  }
};
const createRandomUsername = async () => {
  [firstName, lastName, username] = await getRandomPerson();
  // Checking if the name is with english characters only
  let validName = true;

  const allNamesCombined = (firstName+lastName+username).toLowerCase().split('')
  for (let letterIndex = 0; letterIndex < allNamesCombined.lenght; letterIndex++) {
    if (!'abcdefghijklmnopqrstuvwxyz1234567890 '.includes(allNamesCombined[letterIndex])) {
      validName = false
    }
  }

  if (validName === true) {
    // Gets the first name plus the first few characters of the last name and returns
    return firstName.toLowerCase() + lastName.slice(0, Math.floor(Math.random() * 3));
  } else {
    // Returns anywhere from 5 characters of it, to the whole username
    return username.slice(0,username.lenght - Math.floor(Math.random() * (username.length - 5)));
  }
  return username
};

// Uses index in order to sort properly
const createRandomScore = (index) => {
  // Inverses the index fx 9=1 and 4=6
  index = 10 - index;

  // Gives random score
  if (index === 10) {
    return 4000 + Math.floor(Math.random() * 300);
  }
  if (index < 5) {
    return index * 50 + (index + 1) * Math.floor(Math.random() * 3) + 1500;
  }
  return index * 61 + (index + 1) * Math.floor(Math.random() * 50) + 2000;
};

const setLeaderboardContent = async () => {
  const names = document.querySelectorAll(".leaderboard-name");
  const scores = document.querySelectorAll(".leaderboard-score");

  for (let i = 0; i < names.length; i++) {
    names[i].textContent = await createRandomUsername();
    scores[i].textContent = createRandomScore(i).toString();
  }
};

setLeaderboardContent();
