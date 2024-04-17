const accountId = 12341234; //constant can't be changed
let accountEmail = "ashish@gmail.com"; //let can be changed and in modern js, we use let instead of var
let accountName = "Ashish";
var accountBalance = 1000; //var can be changed and it is not recommended to use var in modern js

console.log(accountId);

console.table([accountId, accountEmail, accountName, accountBalance]);

console.table({
  accountId: accountId,
  accountEmail: accountEmail,
  accountName: accountName,
  accountBalance: accountBalance,
});

/*
    Always user modern js syntax and avoid using var
    You can also user variabe without using data types such as var, let or const but it is not recommended
    When you declare a variable but do not assign a value to it, it will be undefined
*/
