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
const date = document.querySelector(".data");

const inputContainer = document.querySelector(".bottom-container");
const alertContainer = document.querySelector(".alert");

// Create and display today's date

const myDate = new Date();
const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];
const days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];

const day = myDate.getDay();
const month = myDate.getMonth();
const year = myDate.getFullYear();
const todaysDate = `${days[day]}, ${day - 1} ${months[month]} ${year}`;

date.textContent = todaysDate;

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
      inputContainer.classList.add("hide");
      alertContainer.classList.remove("hide-alert");

      setInterval(function () {
         inputContainer.classList.remove("hide");
         alertContainer.classList.add("hide-alert");
      }, 1000);
   }

   totalPending = totalPending + 1;
   pending.textContent = totalPending;

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
      const p3 = document.createElement("p");
      p3.textContent = data[i];
      li.appendChild(document.createTextNode(data[i]));
      // li.appendChild(document.createTextNode(todaysDate));
      li.className = "single-task";

      const span = document.createElement("span");
      const p = document.createElement("p");
      span.className = "delete";
      span.appendChild(document.createTextNode("X"));

      li.append(span);
      listOfTasks.prepend(li);

      span.addEventListener("click", (e) => {
         totalTasksNumber--;
         tasksNumber.textContent = totalTasksNumber;

         deletePending(e);
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
   } else if (e.target.classList.value === "single-task") {
      totalComplete = totalComplete - 1;
      complete.textContent = totalComplete;
      totalPending = totalPending + 1;
      pending.textContent = totalPending;

      flag = true;
   }
};
const deletePending = (e) => {
   if (e.target.parentElement.classList.value === "single-task done") {
      totalComplete = totalComplete - 1;
      complete.textContent = totalComplete;
   } else if (e.target.parentElement.classList.value === "single-task") {
      totalPending = totalPending - 1;
      pending.textContent = totalPending;
   }
};
const markTask = (e) => {
   let flag = false;

   if (e.target.parentElement.classList.value === "tasks" && flag === false) {
      flag = true;
      e.target.classList.toggle("done");
   }
   updatePending(e);
   console.log(e.target.parentElement.classList.value);
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
