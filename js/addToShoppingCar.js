const $form = document.querySelector(".form");

let added = 0;

const $containerUnitSelected = $form.querySelector(".cont-select_qty"),
  $addQty = document.getElementById("addQty"),
  $subtractQty = document.getElementById("subtractQty");

const $containerItemInCar = document.querySelector(".cont-details"),
  $productName = document.querySelector(".selected-product-name"),
  $productPrice = document.querySelector(".productPrice"),
  $productUnits = document.querySelector(".productUnits"),
  $productImg = document.querySelector(".cont-image");

function addToShoppingListMainProduct() {
  let $image = document
    .querySelector(".main-image")
    .getElementsByTagName("img")[0];

  let $cloneImg = $image.cloneNode(true);

  let data = {
    product: $form.querySelector(".product-name").textContent,
    price: document.getElementById("productPrice").textContent,
    image: $cloneImg,
    qty: $form.productUnit.value,
    color: $form.colorProduct.value,
    size: $form.sizeProduct.value,
  };

  return data;
}

$addQty.addEventListener("click", (e) => {
  e.preventDefault();
  let value = Number($form.productUnit.value);
  if (value >= 0) {
    value++;
    $form.productUnit.value = value;
  }
});

$subtractQty.addEventListener("click", (e) => {
  e.preventDefault();
  let value = Number($form.productUnit.value);
  if (value > 0) {
    value--;
    $form.productUnit.value = value;
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = addToShoppingListMainProduct();

  $productName.textContent = `${data.product} (${data.color}, ${data.size})`;
  $productPrice.textContent = data.price;
  $productUnits.textContent = `${data.qty} `;

  if (added > 0) {
    console.log("Updated");
  } else {
    $productImg.appendChild(data.image);
  }

  //Show shopping car
  $iconSidebar.style.opacity = 1;
  added++;
});
