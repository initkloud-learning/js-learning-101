// Code Snippet 01 : class syntax in ES6
class User {
  constructor(username, eamail, password) {
    this.username = username;
    this.email = eamail;
    this.password = password;
  }

  encryptPassword() {
    // Encrypt password
    return `${this.password}wWj3wsf`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const initkloud = new User("initkloud", "initkloud@g.com", "123456");

console.log(initkloud.encryptPassword());
console.log(initkloud.changeUsername());

// behind the scene

function User2(username, eamail, password) {
  this.username = username;
  this.email = eamail;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  // Encrypt password
  return `${this.password}wWj3wsf`;
};

User2.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const initkloud2 = new User2("initkloud", "init@g.com", "123456");
console.log(initkloud2.encryptPassword());
console.log(initkloud2.changeUsername());
