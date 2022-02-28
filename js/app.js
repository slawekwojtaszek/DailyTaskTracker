// const input = document.querySelector("#new-task");
const form = document.querySelector("form");
const input = document.querySelector("#new-task");
const listOfTasks = document.querySelector(".tasks");
const deleteBtn = document.querySelector(".delete");
const filter = document.querySelector(".filter");
const tasksNumber = document.querySelector(".number-tasks");
const dateElement = document.querySelector(".date");
const test = document.querySelector(".test");
const number = document.querySelector(".number");

const myArray = [];
const myArray2 = [];

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

let buttonOn = false;

const year = myDate.getFullYear();

const todaysDate = `${days[day]}, ${day} ${months[month]} ${year}`;

dateElement.textContent = todaysDate;

function addFromArray() {
   const li = document.createElement("li");
   const p = document.createElement("p");

   myArray.map((item) => {
      li.appendChild(document.createTextNode(item));
      console.log(li);
      li.className = "single-task";
      listOfTasks.appendChild(li);
      const span = document.createElement("span");
      span.className = "delete";
      span.appendChild(document.createTextNode("X"));
      li.appendChild(span);
      number.textContent = myArray2.length + 1;
   });

   const newArray = myArray.pop();
   myArray2.push(newArray);

   const newArrayLen = myArray2.length;

   console.log(myArray2);
   console.log(newArrayLen);
}

function addTask(e) {
   let newTask = input.value;
   if (newTask !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      // const h1 = document.createElement("h1");

      li.className = "single-task";

      li.appendChild(document.createTextNode(newTask));
      // li.appendChild(h1);
      const span = document.createElement("span");
      span.className = "delete";
      span.appendChild(document.createTextNode("X"));
      li.appendChild(span);
      listOfTasks.appendChild(li);
      myArray.push(newTask);
      addFromArray();
   }

   input.value = "";
   e.preventDefault();
}

function removeTask(e) {
   // const el = e.target.parentElement;

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

function handleOpeningFilter(e) {
   e.preventDefault();
   if (!buttonOn) {
      filter.classList.add("tak");
      buttonOn = true;
   } else {
      filter.classList.remove("tak");
      buttonOn = false;
   }
}

form.addEventListener("submit", addTask);
listOfTasks.addEventListener("click", markTask);
listOfTasks.addEventListener("click", removeTask);
filter.addEventListener("input", handleFilter);
test.addEventListener("click", handleOpeningFilter);
