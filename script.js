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

document.getElementById('light-mode-button').addEventListener('click', function() {
    document.body.className = 'light-mode';
});

document.getElementById('dark-mode-button').addEventListener('click', function() {
    document.body.className = 'dark-mode';
});

document.getElementById('template').addEventListener('change', function() {
    const template = this.value;
    const taskInput = document.getElementById('task-input');
    if (template === 'template1') {
        taskInput.value = 'テンプレート1のタスク';
    } else if (template === 'template2') {
        taskInput.value = 'テンプレート2のタスク';
    } else {
        taskInput.value = '';
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
        taskElement.innerText =
        const taskElement = document.createElement('div');
        taskElement.innerText = task;
        archivedTasksContainer.appendChild(taskElement);
    });
}

function updateCurrentTimeTask() {
    const currentTimeTaskDisplay = document.getElementById('current-time-task');
    const now = new Date();
    const currentTask = tasks.find(task => /* condition based on the task time */);
    if (currentTask) {
        currentTimeTaskDisplay.textContent = '現在のタスク: ' + currentTask;
    } else {
        currentTimeTaskDisplay.textContent = '現在のタスク: なし';
    }
}

// Call the function initially and every minute
updateCurrentTimeTask();
setInterval(updateCurrentTimeTask, 60 * 1000);
