var credential = [
  {
    user: "admin",
    password: "admin123",
  },
  {
    user: "admin1",
    password: "admin111",
  },
  {
    user: "admin2",
    password: "admin222",
  },
];

var news = [
  {
    user: "user1",
    timeline: "learning something new",
  },
  {
    user: "user2",
    timeline: "learning objects in javascript today",
  },
  {
    user: "user3",
    timeline: "learning something new daily about javascript",
  },
  {
    user: "user4",
    timeline: " javascript today validations",
  },
];

var userNamePrompt = prompt("Enter username");
var passwordPrompt = prompt("Enter password");

function isValidUser(user,password) {
  for (let i in credential) {
    if (credential[i].user === user && credential[i].password === password) {
      return true;
    }
  }
  return false;
}

function checkCredentials(user, pass) {
  // if (user === credential.user && pass === credential.password) {
  //   console.log(news);
  // } else {
  //   alert("Invalid credentials");
  // }

  if (isValidUser(user, pass)) {
    console.log(news);
  } else {
    alert("Invalid credentials");
  }
}

checkCredentials(userNamePrompt, passwordPrompt);
