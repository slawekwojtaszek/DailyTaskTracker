// const input = document.querySelector("#new-task");
const form = document.querySelector("form");
const input = document.querySelector("#new-task");
const listOfTasks = document.querySelector(".tasks");
const deleteBtn = document.querySelector(".delete");
const filter = document.querySelector(".filter");
const tasksNumber = document.querySelector(".number-tasks");
const dateElement = document.querySelector(".date");

// const myDate = new Date();
// const months = [
//    "January",
//    "February",
//    "March",
//    "April",
//    "May",
//    "June",
//    "July",
//    "August",
//    "September",
//    "October",
//    "November",
//    "December",
// ];
// const days = [
//    "Sunday",
//    "Monday",
//    "Tuesday",
//    "Wednesday",
//    "Thursday",
//    "Friday",
//    "Saturday",
// ];

// const day = myDate.getDay();
// const month = myDate.getMonth();
// const year = myDate.getFullYear();
// const todaysDate = `${days[day]}, ${day} ${months[month]} ${year}`;

// dateElement.textContent = todaysDate;

let data = ["list1", "list2", "list3"];
let total = ["list1", "list2", "list3"];

let flag = false;

function addTask(e) {
   let newTask = input.value;
   data.push(newTask);
   total.push(newTask);
   // if (newTask !== "") {
   //    data.push(newTask);
   //    const li = document.createElement("li");
   //    const p = document.createElement("p");

   //    li.className = "single-task";
   //    li.appendChild(document.createTextNode(newTask));
   //    const span = document.createElement("span");
   //    span.className = "delete";
   //    span.appendChild(document.createTextNode("X"));
   //    li.appendChild(span);
   //    listOfTasks.prepend(li);
   // }

   input.value = "";

   displayTask();

   e.preventDefault();
}
displayTask();

function displayTask() {
   const li = document.createElement("li");
   const p = document.createElement("p");
   for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(data[i]));
      li.className = "single-task";
      const span = document.createElement("span");
      span.className = "delete";
      span.appendChild(document.createTextNode("X"));
      li.append(span);
      console.log(total.length);
      listOfTasks.prepend(li);
   }
   data = [];

   // const p = document.createElement("p");
   // li.className = "single-task";
   // const span = document.createElement("span");
   // span.className = "delete";
   // span.appendChild(document.createTextNode("X"));
   // li.appendChild(span);
}

function removeTask(e) {
   if (e.target.parentElement.classList.contains("single-task")) {
      e.target.parentElement.remove();
   }

   // if (e.target.parentElement.classList.contains("single-task")) {
   //    el.classList.add("slide-out-elliptic-left-bck");
   // } else if (e.target.parentElement.classList.contains("single-task")) {
   //    console.log("yes");
   // }
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
