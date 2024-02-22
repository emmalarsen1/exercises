//task array
const task_array = [];
makeNewTask();
makeNewTask();
makeNewTask();

//function - new task
function makeNewTask() {
  const task = { name: "Defualt name", done: false };
  task_array.push(task);
  //   console.log("task_array", task_array);
  filtSortList();
}

function filtSortList() {
  let listShow;
  //sortering og filtrering
  listShow = task_array;
  showList();
}

function showList() {
  const tbody = document.querySelector("ul");
  tbody.innerHTML = "";
  task_array.forEach((task) => {
    const clone = document.querySelector("template").content.cloneNode(true);
    if (task.done) {
      clone.querySelector("header").textContent = "Completed";
    } else {
      clone.querySelector("header").textContent = "To Do";
    }
    clone.querySelector("button").addEventListener("click", () => {
      console.log("klik");
      task.done = !task.done;
      filtSortList();
      console.log("task_array", task_array);
    });

    // clone.querySelector("header").textContent = task.name;
    tbody.appendChild(clone);
  });
}
