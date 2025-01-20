// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false to prevent re-saving to Local Storage
      }

    
    // Step 3: Create the addTask Function
    function addTask() {
      // Retrieve the input text and trim any extra spaces
      const taskText = taskInput.value.trim();
  
      // Check if the task input is empty
      if (taskText === '') {
        alert('Please enter a task');
        return; // Exit the function if the input is empty
      }
  
      // Step 4: Task Creation and Removal
      // Create a new list item (li) for the task
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
  
      // Create the remove button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
  
       // Add the remove functionality: remove the task when clicked
      function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }
      
      // Add the remove functionality: remove the task when clicked
      removeButton.onclick = function() {
        taskList.removeChild(newTask);
      };
  
      // Append the remove button to the li
      newTask.appendChild(removeButton);
  
      // Append the li to the task list
      taskList.appendChild(newTask);
  
      // Step 5: Clear the input field after adding the task
      taskInput.value = '';
    }

    // Save to Local Storage if `save` is tru
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
      
  
    // Step 6: Attach Event Listeners
    // Add task when the Add Task button is clicked
    addButton.addEventListener('click', addTask);
  
    // Add task when the Enter key is pressed inside the input field
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
  });
  