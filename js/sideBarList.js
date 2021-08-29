const $containerSideList = document.querySelector(".sidebar"),
  $iconSidebar = document.getElementById("iconSidebar");

const $close = document.createElement("img");
$close.setAttribute("src", "./img/close-x.svg");

const $carrito = document.createElement("img");
$carrito.setAttribute("src", "./img/carrito.svg");

$iconSidebar.addEventListener("click", () => {
  $containerSideList.classList.toggle("showSidebar");
  changeIcon();
});

function changeIcon() {
  let arrAttributes = $containerSideList.getAttribute("class").split(" ");

  if (arrAttributes[1] == "showSidebar") {
    $iconSidebar.innerHTML = "";
    $iconSidebar.appendChild($close);
  } else {
    $iconSidebar.innerHTML = "";
    $iconSidebar.appendChild($carrito);
  }
}
