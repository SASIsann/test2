// script.js
let tasks = [];
let archivedTasks = [];
let taskId = 0;

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value) {
        tasks.push({ id: taskId++, name: taskInput.value });
        taskInput.value = '';
        renderTasks();
        updateCurrentTimeTask();
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
    renderTaskList(tasks, document.getElementById('current-tasks'), true);
}

function renderArchivedTasks() {
    renderTaskList(archivedTasks, document.getElementById('archived-tasks'), false);
}

function renderTaskList(taskList, container, isCurrentTask) {
    container.innerHTML = '';
    taskList.forEach(function(task) {
        const taskElement = document.createElement('div');
        taskElement.innerText = task.name;
        if (isCurrentTask) {
            taskElement.addEventListener('click', function() {
                archivedTasks.push(task);
                tasks = tasks.filter(t => t.id !== task.id);
                renderTasks();
                renderArchivedTasks();
            });
        }
        container.appendChild(taskElement);
    });
}

function updateCurrentTimeTask() {
    const currentTimeTaskDisplay = document.getElementById('current-time-task');
    const currentTask = tasks[0]; // ここでは最初のタスクを現在のタスクとしています
    if (currentTask) {
        currentTimeTaskDisplay.textContent = '現在のタスク: ' + currentTask.name;
    } else {
        currentTimeTaskDisplay.textContent = '現在のタスク: なし';
    }
}

// Call the function initially and every minute
updateCurrentTimeTask();
setInterval(updateCurrentTimeTask, 60 * 1000);

