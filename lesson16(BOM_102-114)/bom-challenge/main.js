const KEY_NAME = "tasks";

let taskTitleInput = document.querySelector(".input");
let addTaskBtn = document.querySelector(".add");

function relinkDeleteEvents() {
  let deleteTaskBtns = document.querySelectorAll(".delete");

  deleteTaskBtns.forEach((btn) => {
    btn.onclick = function () {
      let taskId = Number(btn.parentElement.dataset.id);

      deleteTaskFromLocalStorage(taskId);
      refreshTasksSection();
    };
  });
}

function saveTaskInLocalStorage(taskTitle) {
  let tasks = JSON.parse(localStorage.getItem(KEY_NAME)) || [];

  tasks.push({
    id: Date.now(),
    title: taskTitle,
  });

  let tasksString = JSON.stringify(tasks);

  localStorage.setItem(KEY_NAME, tasksString);
}

function loadTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem(KEY_NAME));
}

function addTasks(tasks) {
  let tasksContainer = document.querySelector(".tasks");

  tasks.forEach((task) => {
    let taskChild = document.createElement("div");
    taskChild.className = "task";
    taskChild.dataset.id = task.id;

    let taskTitle = document.createElement("p");
    taskTitle.className = "name";
    taskTitle.innerHTML = task.title;

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerHTML = "Delete";

    taskChild.appendChild(taskTitle);
    taskChild.appendChild(deleteButton);

    tasksContainer.appendChild(taskChild);
  });
}

function refreshTasksSection() {
  let tasks = document.querySelectorAll(".task");

  if (tasks) {
    tasks.forEach((task) => {
      task.remove();
    });
  }

  let storedTasks = loadTasksFromLocalStorage();

  if (storedTasks) addTasks(storedTasks);
  relinkDeleteEvents();
}

function deleteTaskFromLocalStorage(taskId) {
  let tasks = loadTasksFromLocalStorage();

  tasks = tasks.filter((t) => t.id !== taskId);

  localStorage.setItem(KEY_NAME, JSON.stringify(tasks));
}

refreshTasksSection();

addTaskBtn.onclick = function () {
  if (taskTitleInput.value) {
    saveTaskInLocalStorage(taskTitleInput.value);
    refreshTasksSection();

    taskTitleInput.value = "";
    taskTitleInput.focus();
  }
};
