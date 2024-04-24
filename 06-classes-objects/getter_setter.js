// Getter and Setter in JavaScript
//Class based approach
class User1 {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    // Getter: It is used to get the value of a property
    return this._email.toUpperCase();
  }

  set email(value) {
    // Setter: It is used to set the value of a property
    this._email = value;
  }

  get password() {
    // Getter: It is used to get the value of a property
    return this._password.toUpperCase();
  }

  set password(value) {
    // Setter: It is used to set the value of a property
    this._password = value;
  }
}

// Creating an object of User class
// Getter and Setter are called as properties not methods
const ashish = new User1("ashupanwar10", "pass123");
console.log(ashish.password); // PASS123
ashish.password = "newpass";
console.log(ashish.password); // NEWPASS

// Old way of doing it.
// Object based approach
function User2(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}

// Creating an object of User class
const ashish2 = new User2("ashupanwar@g.com", "pass123");
console.log(ashish2.email); // pass123
ashish2.email = "newemail@g.com";
console.log(ashish2.email); // newpass

//Object based approach
const User = {
  _email: "ashupanwar10@g.com",
  _password: "pass123",
  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

console.log(User.email); //
User.email = "ini@g.com";
console.log(User.email); //
