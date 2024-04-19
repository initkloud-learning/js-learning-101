// const tinderusers = {} // Singleton object => Constructor object

const tinderusers = {};

tinderusers.id = "123ABC";
tinderusers.name = "Sammy";
tinderusers.isLoggedin = false;

// console.log(tinderusers);

const regularUser = {
  email: "someone@gmail.com",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

console.log(regularUser.fullName.firstName);

const obj01 = {
  1: "a",
  2: "b",
};

const obj02 = {
  3: "a",
  4: "b",
};

// const obj3 = {
//   obj01,
//   obj02,
// };

const obj03 = {
  ...obj01,
  ...obj02,
};
console.log(obj03);

console.log(Object.keys(obj03));
console.log(Object.values(obj03));

console.log(Object.entries(obj03));
console.log(obj03.hasOwnProperty("1"));
