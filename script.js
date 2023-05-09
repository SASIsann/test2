let tasks = [];
let archivedTasks = [];

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskStartTime = document.getElementById('task-start-time');
    const taskEndTime = document.getElementById('task-end-time');
    if (taskInput.value) {
        tasks.push({
            title: taskInput.value,
            startTime: taskStartTime.value,
            endTime: taskEndTime.value,
        });
        taskInput.value = '';
        taskStartTime.value = '';
        taskEndTime.value = '';
        renderTasks();
    }
});

function renderTasks() {
    const tasksContainer = document.getElementById('current-tasks');
    tasksContainer.innerHTML = '';
    tasks.forEach(function(task, index) {
        const taskElement = document.createElement('div');
        taskElement.innerText = `${task.title} (${task.startTime} - ${task.endTime})`;
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
        taskElement.innerText = `${task.title} (${task.startTime} - ${task.endTime})`;
        archivedTasksContainer.appendChild(taskElement);
    });
}

function displayCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('current-time').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(displayCurrentTime, 1000);

