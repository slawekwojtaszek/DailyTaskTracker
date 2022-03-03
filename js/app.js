//Import all elements

const form = document.querySelector("form");
const input = document.querySelector("#new-task");
const listOfTasks = document.querySelector(".tasks");
const deleteBtn = document.querySelector(".delete");
const filter = document.querySelector(".filter");
const tasksNumber = document.querySelector(".number");
const dateElement = document.querySelector(".date");

const pending = document.querySelector(".pendingx");
const complete = document.querySelector(".completex");

// Create and display today's date

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

let data = [
   "Add search feature to last project",
   "Make cold press ginger juice",
   "Row a 5k today",
   "Do 30 minutes breathing exercise ",
];
let flag = true;

let totalTasksNumber = data.length - 1;
let totalPending = data.length;
let totalComplete = 0;

const updateTasksNumber = () => {
   totalTasksNumber++;
   tasksNumber.textContent = totalTasksNumber;
};

updateTasksNumber();

function addTask(e) {
   let newTask = input.value;

   if (newTask !== "") {
      data.push(newTask);
   } else {
      alert("type something");
   }

   displayTask();
   updateTasksNumber();
   e.preventDefault();

   input.value = "";
}

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
      listOfTasks.prepend(li);

      span.addEventListener("click", (e) => {
         totalTasksNumber--;
         tasksNumber.textContent = totalTasksNumber;
      });
   }
   pending.textContent = totalPending;
   complete.textContent = totalComplete;
   data = [];
}
displayTask();

function removeTask(e) {
   if (e.target.parentElement.classList.contains("single-task")) {
      e.target.parentElement.remove();
   }
}

const updatePending = (e) => {
   if (e.target.classList.value === "single-task done") {
      console.log("siema");
      totalPending = totalPending - 1;
      pending.textContent = totalPending;
      totalComplete = totalComplete + 1;
      complete.textContent = totalComplete;
      flag = false;
   } else {
      totalPending = totalPending + 1;
      pending.textContent = totalPending;
      totalComplete = totalComplete - 1;
      complete.textContent = totalComplete;
      flag = true;
   }
};

const markTask = (e) => {
   let flag = false;

   if (e.target.parentElement.classList.value === "tasks" && flag === false) {
      flag = true;
      e.target.classList.toggle("done");
   }
   updatePending(e);
   console.log(e.target);
};

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
