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

  const allNamesCombined = [firstName,lastName,username].join('').toLowerCase().split('')
  for (let letterIndex = 0; letterIndex < allNamesCombined.length; letterIndex++) {
    if ('abcdefghijklmnopqrstuvwxyz1234567890'.split('').includes(!allNamesCombined[letterIndex])) {
      validName = false
    }
  }

  // Just to have more frequent use of the "username"
  const random = Math.random() > 0.25 ? true : false
  if (validName && random) {
    // Gets the first name plus the first few characters of the last name and returns
    return firstName.toLowerCase() + lastName.slice(0, Math.floor(Math.random() * 3));
  } else {
    // Returns anywhere from 4 to 8 characters of the username
    username = username.slice(0,username.length - Math.floor(Math.random() * (username.length - 4)))
    return username.length > 8 ? username.slice(0,6) : username
    return ;
  }
  return username
};

// Uses index in order to sort properly
const createRandomScore = (index) => {
  // Inverses the index fx 9=1 and 4=6
  index = 10 - index;

  // Gives random score
  if (index === 10) {
    return 14000 + Math.floor(Math.random() * 7000);
  }
  if (index < 5) {
    return index * 1000 + (index + 1) * Math.floor(Math.random() * 3) + 2000;
  }
  return index * 1220 + (index + 1) * Math.floor(Math.random() * 5) + 2000;
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
