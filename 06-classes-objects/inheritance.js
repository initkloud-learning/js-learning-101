// base class | main class | parent class
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Main Class: I am ${this.username}`);
  }
}

// sub class | child class
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  logMe() {
    console.log(
      `Teacher Class: I am ${this.username} and I am an ${this.title}`
    );
  }

  addCourse() {
    console.log(`${this.username} has added a new course`);
  }
}

const teacher = new Teacher("initkloud", "init@g.com", "123456");
teacher.addCourse();
teacher.logMe();

const teacher02 = new User("initkloud");
teacher02.logMe();
// teacher02.addCourse(); // Error: teacher02.addCourse is not a function

console.log(teacher === teacher02); // false
console.log(teacher instanceof Teacher); // true
console.log(teacher instanceof User); // true
console.log(teacher02 instanceof Teacher); // false
console.log(teacher02 instanceof User); // true
console.log(teacher instanceof Object); // true
console.log(teacher02 instanceof Object); // true
console.log(teacher02 instanceof teacher); // false
console.log(teacher instanceof teacher02); // false
