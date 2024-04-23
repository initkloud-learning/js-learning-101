const user = {
  username: "ashish",
  loginCount: 8,
  signedin: true,
  getUserDetails: function () {
    console.log(
      `Username is ${this.username}, user has logged in ${this.loginCount} times`
    );
  },
};

console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("ashish", 8, true);
const userOne2 = new User("ashish2", 18, false);
console.log(userOne);
console.log(userOne2);

// new keyword: creates a new object
// this keyword: refers to the object that is created by the new keyword
// return this: returns the object created by the new keyword
// constructor function: function that is used to create an object
