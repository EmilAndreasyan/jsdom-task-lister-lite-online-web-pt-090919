document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new TaskList();
  
  const createTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const newTaskPriority = document.getElementById("new-task-priority");
  const list = document.getElementById('list');
  
  createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    list.appendChild(newTaskDescription.value);
  });
  return list
});
