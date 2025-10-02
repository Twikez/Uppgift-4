const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const doneCount = document.getElementById("doneCount");
const message = document.getElementById("message");
const tasks = []; // Array för att lagra uppgifter

// Lägg till uppgifter
addButton.addEventListener("click", () => {
  const text = taskInput.value.trim();

  // Skriver man inte in nåt så får man upp varning
 if (text === "") {
    message.textContent = "Du måste skriva något!";
    return;
  }

  // Rensa meddelande om det gick bra
  message.textContent = "";

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

    // Skapa span för texten
    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    if (task.done) {
      taskText.classList.add("done");
    }
    li.appendChild(taskText);

    // Klicka på texten för att markera/avmarkera
    taskText.addEventListener("click", () => {
      task.done = !task.done;
      renderTasks();
    });

    // Skapa papperskorg
    const del = document.createElement("span");
    del.textContent = "🗑️";
    del.classList.add("delete");
    del.addEventListener("click", (e) => {
      e.stopPropagation(); // Förhindra att klick på papperskorgen markerar uppgiften
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(del);
    taskList.appendChild(li);
  });

  // Uppdatera räkning
  const doneTasks = tasks.filter(t => t.done).length;
  doneCount.textContent = doneTasks;
}
