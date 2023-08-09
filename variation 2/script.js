function addItemOne() {
  let item = document.getElementById("itemOne").value;
  console.log(item);
  appendItem(item);
}

function appendItem(item) {
  let itemList = document.createElement("button");
  itemList.classList.add("btn");
  itemList.classList.add("btn-success");
  itemList.setAttribute("content", "test content");
  itemList.setAttribute("type", "button");
  itemList.setAttribute("value", "");
  console.log(item);
  itemList.value = item;
  document.getElementById("selectedList").appendChild(itemList);
}
