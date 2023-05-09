// script.js
let tasks = [];
let archivedTasks = [];

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value) {
        tasks.push(taskInput.value);
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    const tasksContainer = document.getElementById('current-tasks');
    tasksContainer.innerHTML = '';
    tasks.forEach(function(task, index) {
        const taskElement = document.createElement('div');
        taskElement.innerText = task;
        taskElement.addEventListener('click', function() {
            archivedTasks.push(task);
            tasks.splice(index, 1);
            renderTasks();
            renderArchivedTasks();
        });
        tasksContainer.appendChild(taskElement);
    });
}

function renderArchivedTasks() {
    const archivedTasksContainer = document.getElementById('archived-tasks');
    archivedTasksContainer.innerHTML = '';
    archivedTasks.forEach(function(task) {
        const taskElement = document.createElement('div');
        taskElement.innerText = task;
        archivedTasksContainer.appendChild(taskElement);
    });
}

