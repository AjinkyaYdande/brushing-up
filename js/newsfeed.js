var credential = {
  user: "admin",
  password: "admin123",
};

var news = [
  {
    user: "user1",
    timeline: "learning something new",
  },
  {
    user: "user2",
    timeline: "learning objects in javascript today",
  },
];

var userNamePrompt = prompt("Enter username");
var passwordPrompt = prompt("Enter password");

function checkCredentials(user, pass) {
  if (user === credential.user && pass === credential.password) {
    console.log(news);
  } else {
    alert("Invalid credentials");
  }
}

checkCredentials(userNamePrompt, passwordPrompt);


