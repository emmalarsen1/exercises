const taskInput = document.getElementById("new-task");
const addButton = document.querySelector("button");
const incompleteTasksHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");

const createTaskElement = (taskString) => {
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  const editInput = document.createElement("input");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";

  label.textContent = taskString;

  [checkBox, label, editInput, editButton, deleteButton].forEach((el) =>
    listItem.appendChild(el)
  );

  return listItem;
};

const addTask = () => {
  const listItem = createTaskElement(taskInput.value);
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
};

const editTask = function () {
  const listItem = this.parentNode;
  const editInput = listItem.querySelector("input[type=text]");
  const label = listItem.querySelector("label");
  const isEditing = listItem.classList.toggle("editMode");

  if (isEditing) {
    editInput.value = label.textContent;
  } else {
    label.textContent = editInput.value;
  }
};

const deleteTask = function () {
  this.parentNode.remove();
};

const taskCompleted = function () {
  completedTasksHolder.appendChild(this.parentNode);
  bindTaskEvents(this.parentNode, taskIncomplete);
};

const taskIncomplete = function () {
  incompleteTasksHolder.appendChild(this.parentNode);
  bindTaskEvents(this.parentNode, taskCompleted);
};

const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
  taskListItem.querySelector("input[type=checkbox]").onchange =
    checkBoxEventHandler;
  taskListItem.querySelector("button.edit").onclick = editTask;
  taskListItem.querySelector("button.delete").onclick = deleteTask;
};

addButton.addEventListener("click", addTask);

[...incompleteTasksHolder.children].forEach((task) =>
  bindTaskEvents(task, taskCompleted)
);
[...completedTasksHolder.children].forEach((task) =>
  bindTaskEvents(task, taskIncomplete)
);
