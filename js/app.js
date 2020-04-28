// const input = document.querySelector("#new-task");
const form = document.querySelector("form");
const input = document.querySelector("#new-task");
const listOfTasks = document.querySelector(".tasks");
const deleteBtn = document.querySelector(".delete");

function addTask(e) {
  let newTask = input.value;
  if (newTask !== "") {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    li.className = "single-task";
    h1.appendChild(document.createTextNode(newTask));
    li.appendChild(h1);
    const span = document.createElement("span");
    span.className = "delete";
    span.appendChild(document.createTextNode("X"));
    li.appendChild(span);
    listOfTasks.appendChild(li);
  }

  input.value = "";
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("single-task")) {
    console.log("yes");

    e.target.parentElement.remove();
  }
}

function markTask(e) {
  if (e.target.parentElement.parentElement.classList.contains("tasks")) {
    console.log("jaha");
  }
}

form.addEventListener("submit", addTask);
listOfTasks.addEventListener("click", markTask);
listOfTasks.addEventListener("click", removeTask);
