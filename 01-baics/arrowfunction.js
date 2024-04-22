const user = {
  username: "batman",
  price: 10,
  welcomeMessage: function () {
    console.log(`Welcome back ${this.username}`);
  },
};

user.welcomeMessage();
user.username = "superman";
user.welcomeMessage();

