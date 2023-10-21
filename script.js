var icons = document.querySelectorAll(".icon");
var shadow = document.querySelector(".shadow");

icons.forEach(function (val, index) {
  val.addEventListener("click", function () {
    shadow.style.transform = `translateX(${index * 100}px)`;
  });
});
