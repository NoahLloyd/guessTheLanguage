const getRandomPerson = async () => {
  const response = await fetch("https://api.randomuser.me/");
  if (response.ok) {
    // Get username
    const person = await response.json();
    console.log(person);
    const firstName = person.results[0].name.first;
    const lastName = person.results[0].name.last;
    const username = person.results[0].login.username;
    return [firstName, lastName, username];
  }
};
const createRandomUsername = (firstName, lastName, username) => {
  // Checking if the name is with english characters only
  console.log(firstName, lastName, username);
  let validName = true;
  for (const letter in firstName.toLowerCase().split("")) {
    if (!"abcdefghijklmnopqrstuvwxyz".includes(letter)) {
      validName = false;
    }
  }

  for (const letter in lastName.toLowerCase().split("")) {
    if (!"abcdefghijklmnopqrstuvwxyz".includes(letter)) {
      validName = false;
    }
  }

  if (validName === true) {
    // Gets the first name plus the first few characters of the last name
    const randomUsername =
      firstName.toString().toLowerCase() + lastName.slice(0, Math.floor(Math.random() * 3));
    return randomUsername;
  }
  // Returns anywhere from 5 characters of it, to the whole username
  const randomUsername = username.slice(
    0,
    username.lenght - Math.floor(Math.random() * (username.length - 5))
  );
  return randomUsername;
};

async () => {
  const person = getRandomPerson();
  console.log(person);
  console.log(createRandomUsername(person));
};
