//Grab the DOM elements
const $productCards = document.querySelectorAll(".productCard");
const arrElements = Array.from($productCards);

function cloneItemsFromAside() {
  let clones = {
    cloneContainerName: $productName.cloneNode(true),
    cloneContainerPrice: $productPrice.cloneNode(true),
    cloneContainerUnits: $productUnits.cloneNode(true),
  };
  return clones;
}

const addToCarBtns = Array.from(document.querySelectorAll(".iconAddToCar"));

addToCarBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    $iconSidebar.style.opacity = 1;

    let card = this.parentNode.parentNode;
    let $img = card.getElementsByTagName("img")[0];

    let takenData = {
      img: $img.cloneNode(true),
      name: card.getElementsByTagName("h4")[0].textContent,
      price: card
        .getElementsByTagName("p")[0]
        .textContent.split(" ")[0]
        .substr(1),
      units: 1,
    };

    let listItems = Array.from(document.querySelectorAll(".added_items"));

    //Check for items added to the car
    if (listItems.length == 1 && added == 0) {
      $productName.textContent = `${takenData.name}`;
      $productPrice.textContent = takenData.price;
      $productUnits.textContent = `${takenData.units} `;
      $productImg.appendChild(takenData.img);
      console.log("rewrited");
    }

    added++;

    if (added > 1) {
      let newItem = document.createElement("div");
      newItem.setAttribute("class", "item");

      let textDetails = document.createElement("div");
      textDetails.setAttribute("class", "cont-details");

      let clones = cloneItemsFromAside();

      //Clone and Rewrite Text Details
      let productName = clones.cloneContainerName;
      productName.textContent = `${takenData.name}`;

      let productPrice = clones.cloneContainerPrice;
      productPrice.textContent = takenData.price;

      let productUnits = clones.cloneContainerUnits;
      productUnits.textContent = `${takenData.units} `;

      let productImg = document.createElement("div");
      productImg.setAttribute("class", "cont-image");
      productImg.appendChild(takenData.img);

      textDetails.appendChild(productName);
      textDetails.appendChild(productPrice);
      textDetails.appendChild(productUnits);

      newItem.appendChild(textDetails);
      newItem.appendChild(productImg);

      let list = document.querySelector(".added_items");
      list.appendChild(newItem);

      console.log(list);
    }
  });
});
