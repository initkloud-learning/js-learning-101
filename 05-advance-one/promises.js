// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an sync tasks
//   //DB calls, cryptography, network related
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async 2 task completed");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "ashupanwar10", email: "ashupanwar@example.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "ashupanwar",
//         password: "123",
//       });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (data) {
//     console.log(data);
//     return data.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("The promise is either resolve or rejected.");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "javascript",
//         password: "javascriptPass",
//       });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    for (let user of data) {
      console.log(user.name);
    }
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let user of data) {
      console.log(user.email);
    }
  })
  .catch(function (e) {
    console.log("E: ", e);
  });
