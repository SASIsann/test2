// script.js
let tasks = [];
let archivedTasks = [];

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value) {
        tasks.push({ name: taskInput.value, completed: false });
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    const tasksContainer = document.getElementById('current-tasks');
    tasksContainer.innerHTML = '';
    tasks.forEach(function(task, index) {
        const taskElement = document.createElement('div');
        taskElement.innerText = task.name;

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function(event) {
            tasks.splice(index, 1);
            renderTasks();
            event.stopPropagation();  // Prevent the click from reaching the task element
        });

        // Move up button
        const moveUpButton = document.createElement('button');
        moveUpButton.innerText = 'Move Up';
        moveUpButton.addEventListener('click', function(event) {
            if (index > 0) {
                const temp = tasks[index];
                tasks[index] = tasks[index - 1];
                tasks[index - 1] = temp;
                renderTasks();
            }
            event.stopPropagation();  // Prevent the click from reaching the task element
        });

        // Move down button
        const moveDownButton = document.createElement('button');
        moveDownButton.innerText = 'Move Down';
        moveDownButton.addEventListener('click', function(event) {
            if (index < tasks.length - 1) {
                const temp = tasks[index];
                tasks[index] = tasks[index + 1];
                tasks[index + 1] = temp;
                renderTasks();
            }
            event.stopPropagation();  // Prevent the click from reaching the task element
        });

        taskElement.appendChild(deleteButton);
        taskElement.appendChild(moveUpButton);
        taskElement.appendChild(moveDownButton);

        tasksContainer.appendChild(taskElement);
    });
}

function renderArchivedTasks() {
    // Same as before
}

// script.js
// ...previous code...

// Add an event listener for theme selection
document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    document.body.className = theme;
});

// script.js
// ...previous code...

// Add an event listener for template selection
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

// Function to update the current time task display
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
