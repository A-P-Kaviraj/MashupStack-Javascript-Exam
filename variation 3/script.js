function addItemOne() {
  let item = document.getElementById("itemOne").innerHTML;
  appendItem(item);
}

function addItemTwo() {
  let item = document.getElementById("itemTwo").innerHTML;
  appendItem(item);
}

function addItemThree() {
  let item = document.getElementById("itemThree").innerHTML;
  appendItem(item);
}

function addItemFour() {
  let item = document.getElementById("itemFour").innerHTML;
  appendItem(item);
}

function addItemFive() {
  let item = document.getElementById("itemFive").innerHTML;
  appendItem(item);
}

function appendItem(item) {
  let itemList = document.createElement("li");
  itemList.classList.add("list-group-item");
  itemList.innerHTML = item;
  document.getElementById("selectedList").appendChild(itemList);
}
