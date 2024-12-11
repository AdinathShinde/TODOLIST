function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    let taskItem = document.createElement('li');
    
    taskItem.textContent = taskText;
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskItem.remove(); 
    };

    taskItem.appendChild(deleteButton);

    let taskList = document.getElementById('taskList');
    taskList.appendChild(taskItem);

    taskInput.value = '';
}
