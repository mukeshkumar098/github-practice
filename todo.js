const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const filterBy = document.getElementById('filterBy');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to add new tasks
function addTask(task) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} class="task-checkbox">
        <span class="task-text ${task.completed ?'completed' : ''}">${task.text}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(newListItem);

    // Add event listener to delete button
    const deleteBtn = newListItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(newListItem);
        tasks.splice(tasks.indexOf(task), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    // Add event listener to checkbox
    const checkbox = newListItem.querySelector('.task-checkbox');
    checkbox.addEventListener('click', () => {
        task.completed = checkbox.checked;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
}

// Function to update the greeting based on time
function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();

    let greeting = '';
    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    document.querySelector('.greeting').textContent = greeting;
}

// Function to filter tasks
function filterTasks() {
    const filterValue = filterBy.value;
    const filteredTasks = tasks.filter((task) => {
        if (filterValue === 'all') {
            return true;
        } else if (filterValue === 'completed') {
            return task.completed;
        } else {
            return!task.completed;
        }
    });

    taskList.innerHTML = '';
    filteredTasks.forEach((task) => {
        addTask(task);
    });
}

// Add event listener to add task button
addTaskBtn.addEventListener('click', () => {
    const newTaskText = prompt('Enter new task:');
    if (newTaskText!== null && newTaskText.trim()!== '') {
        const newTask = { text: newTaskText, completed: false };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        addTask(newTask);
    }
});

// Add event listener to filter by select
filterBy.addEventListener('change', filterTasks);

// Initial greeting
updateGreeting();
setInterval(updateGreeting, 1000 * 60 * 60); // Update every hour

// Load tasks from local storage
tasks.forEach((task) => {
    addTask(task);
});

// Filter tasks initially
filterTasks();