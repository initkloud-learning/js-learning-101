// Getter and Setter in JavaScript
class User {
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
const ashish = new User("ashupanwar10", "pass123");
console.log(ashish.password); // PASS123
ashish.password = "newpass";
console.log(ashish.password); // NEWPASS
