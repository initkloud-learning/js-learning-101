document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "IMG") {
      imgListEl = e.target.parentNode;
      // imgListEl.remove(); // directly remove element
      imgListEl.parentNode.removeChild(imgListEl);
    }
  },
  false
);
