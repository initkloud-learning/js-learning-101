class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Main Class: Username ${this.username}`);
  }

  static createId() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const cap_letters = letters.toUpperCase();
    return (
      "_" +
      letters[Math.floor(Math.random() * 26)] +
      `123123` +
      cap_letters[Math.floor(Math.random() * 26)]
    );
  }
}

const ashish = new User("ashish");
// console.log(ashish.createId()); // not accessible via instance of User class

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacher = new Teacher("initkloud", "init@g.com");
// console.log(teacher.createId()); // not accessible via instance of Teacher class
teacher.logMe();
console.log(teacher);
