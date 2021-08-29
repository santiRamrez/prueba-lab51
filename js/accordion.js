const $acc = document.querySelectorAll(".acc");
let arr = Array.from($acc);

arr.forEach((title) => {
  title.addEventListener("click", function () {
    this.classList.toggle("active");
    let hiddenContent = this.nextElementSibling;
    if (hiddenContent.style.maxHeight) {
      hiddenContent.style.maxHeight = null;
    } else {
      hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
    }
  });
});
