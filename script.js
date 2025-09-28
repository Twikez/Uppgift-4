const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const doneCount = document.getElementById("doneCount");

let tasks = []; // Array för att lagra uppgifter

// Lägg till uppgifter
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

// Funktion för att visa uppgifter
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) {
      li.classList.add("done");
    }

// Klicka för att markera/avmarkera
    li.addEventListener("click", () => {
      task.done = !task.done;
      renderTasks();
    });

    taskList.appendChild(li); 
  }); 
} 