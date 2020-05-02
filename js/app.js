// const input = document.querySelector("#new-task");
const form = document.querySelector("form");
const input = document.querySelector("#new-task");
const listOfTasks = document.querySelector(".tasks");
const deleteBtn = document.querySelector(".delete");
const filter = document.querySelector(".filter");
const tasksNumber = document.querySelector(".number-tasks");

function addTask(e) {
  let newTask = input.value;
  if (newTask !== "") {
    const li = document.createElement("li");
    // const h1 = document.createElement("h1");
    li.className = "single-task";
    li.appendChild(document.createTextNode(newTask));
    // li.appendChild(h1);
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
  if (e.target.parentElement.classList.value === "tasks") {
    e.target.classList.toggle("done");
  }
}

function handleFilter(e) {
  const input = e.target.value.toLowerCase();

  document.querySelectorAll(".single-task").forEach(function (task) {
    let item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(input) !== -1) {
      task.style.display = "flex";
      console.log("siema");
    } else {
      task.style.display = "none";
      console.log("nie-siema");
    }
  });
}

form.addEventListener("submit", addTask);
listOfTasks.addEventListener("click", markTask);
listOfTasks.addEventListener("click", removeTask);
filter.addEventListener("input", handleFilter);
