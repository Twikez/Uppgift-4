const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const doneCount = document.getElementById("doneCount");

let tasks = []; // Array för att lagra uppgifter

// Lägg till uppgift
addButton.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Du måste skriva något!");
    return;
  }

  const task = {
    text: text,
    done: false
  };

  tasks.push(task);
  renderTasks();
  taskInput.value = "";
});



