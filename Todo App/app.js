let btn = document.querySelector("button");
let task = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");

  if (task.value != 0) {
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");
    li.innerText = task.value;
    ul.appendChild(li);
    li.appendChild(deleteBtn);
    task.value = "";
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
