let anotherUsername = "initkloud    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"ashsih   ".trueLength();
"   anshu ".trueLength();
