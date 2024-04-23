// call aand this in JavaScript

// call() method is used to call a function with a given this value and arguments provided individually.
// The call() allows for a function/method belonging to one object to be assigned and called for a different object.
function setUsername(username) {
  // complex logic here
  this.username = username;
}

function createUser(username, email, password) {
  //   setUsername(username); // this will not work
  //   setUsername.call(username); // this will not work
  setUsername.call(this, username); // this will work: call() method - call setUsername function with this value of createUser
  this.email = email;
  this.password = password;
}

const initkloud = new createUser("initkloud", "initkloud@g.cm", "123456");
console.log(initkloud);
