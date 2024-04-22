//JavaScript file for colorchanger project

const btnElements = document.querySelectorAll(".button");
const bodyElement = document.querySelector("body");

btnElements.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.id == "grey") {
      bodyElement.style.backgroundColor = e.target.id;
    } else if (e.target.id == "white") {
      bodyElement.style.backgroundColor = e.target.id;
    } else if (e.target.id == "blue") {
      bodyElement.style.backgroundColor = e.target.id;
    } else if (e.target.id == "yellow") {
      bodyElement.style.backgroundColor = e.target.id;
    }
  });
});
