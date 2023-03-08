/*
1. Create 3 constant variables
- Create a constant variable named form and set it equal to a querySelector() that will retrieve the form element
- Create a constant variable named input and set it equal to a getElementById() that will retrieve the new-item-input element
- Create a constant variable named list and set it equal to a getElementById() that will retrieve the todo-list element
*/
const form = document.querySelector('form');
const input = document.getElementById('new-item-input');
const list = document.getElementById('todo-list');
/*
2. Create 1 variable
- Create a variable called todos. Set this variable equal to an empty array.
*/
todos = [];

// This event listener will: Add new to-do item when form is submitted/Item is added to list
form.addEventListener('submit', (event) => {
  event.preventDefault();

  /*
  * 3. Create a constant object and assign key/value pairs to the object
  - Create a constant variable named todo
  - This variable should be equal to an object. An object is declared using curly braces {}
  - Inside the curly braces add the following attributes and values - Note: Each key end in a colon and each value ends with a comma
     id: Date.now(),
     text: input.value,
     completed: false
  */
  const todo = {
    id: Date.now(),
    text: input.value,
    completed: false
  };

  /** 
  * 4. Add a todo to the todos array
  * - Use .push() to add the todo to the todos array
  * - Add a console.log(todos) and refresh in the browser to test that an item displays as an object with the keys defined in Step 3. 
  * Note: The id will be a different value and the text will be whatever you typed in the input
  */
  todos.push(todo);
  console.log(todos);

  /**
  * 5. Currently, if we type a value in the input element, the value will stay there. 
  * Instead, we want to clear the value.
  * - To do this, set input.value equal to an empty string.
  */
  input.value = '';

  /**
   * 6. Uncomment this code by removing the `//`
   * - Add these two lines of code after the code in Step 5
   * 
   * These lines will call the methods. Currently they do not exist, you will create them in Step 7 and Step 8 
   */
  saveTodos();
  renderTodos();
});

/**
 * 7. Save the list of to-do items to local storage
 * We need to define a function to put this line of code inside.
 * - Define a function called saveTodos()
 * - Add this line of code inside of the function: 
 *  localStorage.setItem('todos', JSON.stringify(todos));
 * 
 *  NOTE: This line of code uses localStorage which is a way to save information to your browser so that when you refresh the page, the information is still there. The setItem() converts the todos array to a JSON object type which is similar to an object in Javascript.
 * 
 * When you complete this step, you should have a function named saveTodos() with one line of code inside of it.
 * - Add a console.log on the next line to confirm this checkpoint: console.log(todos)
 */
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

/**
 * 8. Create an empty function
 * - Create a function named renderTodos, leave it blank/empty for now. 
 * In this step, we are defining the function that we will add more to in step 9.
 */
function renderTodos() {
  list.innerHTML = '';

  todos.forEach(function(todo) {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" id="${todo.id}" ${todo.completed ? 'checked' : ''}>
        <label for="${todo.id}" class="${todo.completed ? 'completed' : ''}">${todo.text}</label>
        <button id="${todo.id}" class="delete">Delete</button>
      `;
      list.appendChild(li);
  })
}



/**
 * 9. Set innerHTML of list created in Step 1 to an empty string
 * - Inside the curly braces of the renderTodos function you created in step 8, set the innerHTML of the list variable equal to an empty string
 * 
 * NOTE: the variable named list was defined in Step 1. 
 * During this step, we are setting the innerHTML of list to an empty string. We do this because we want to start with an empty list each time.
 * within the next couple steps we are going to add an li tag for each of the items in the list. To ensure the innerHTML of the list is always cleared, we have to set it equal to an empty string.
 */

// NOTE: During Steps 10-13 we will add a li tag for each todo that is in the array, we will set the innerHTML and append the li tag to the HTML

/**
 * 10. Create a forEach array method to iterate through each todo
 * - Use the .forEach() array method to loop through each todo  
 * HINT: This Javascript function will need to have the singular version of todo defined
 * 
 * After Step 10 Checkpoint: Add console.log(todo) inside of the forEach function definition. Once you refresh the index.html page, open the console (right click --> select Inspect), add a new item on to form and click Add, you should see output display to the console
 * 
 */


/**
 * 11. Add a constant variable li and create a new li (list item) HTML element 
 * You will do 2 things this step:
 * - Define a constant variable called li
 * - Use document.createElement() to create a li HTML element
 */


/**
 * 12. Set the innerHTML of the constant variable li to a value
 * - Add this code to a new line after step 11:
 * li.innerHTML = `
 *    <input type="checkbox" id="${todo.id}" ${todo.completed ? 'checked' : ''}>
 *    <label for="${todo.id}" class="${todo.completed ? 'completed' : ''}">${todo.text}</label>
 *    <button id="${todo.id}" class="delete">Delete</button>
 * `;
 * 
 * NOTE: This line of code is adding the id, text and completed values to the innerHTML of the li. Essentially, we are creating the HTML for each todo item in the array.
 */


/**
 * 13. Append the li (list item element) to the list
 * - Use appendChild() to add the li to the list
 * 
 * After Step 13 Checkpoint: Add the end of this step, you should be able to add an item to the list and see it displayed on the page
 */


/**
 * 14. Currently, nothing happens if you check the box next to the item or if you click the Delete button next to a todo.
 * Let's change that starting at Step 15.
 */

// Starting at this Step, we will work on: Mark to-do item as completed or remove it from the list
/**
 * 15. Add a click list event listener 
 * - Using addEventListener(), add an event listener for when an item from the list is clicked 
 */
list.addEventListener("click", function(event) {
  if(event.target.tagName === 'INPUT') {
    const todo = todos.find(todo => todo.id === parseInt(event.target.id));
    todo.completed = event.target.checked;

    saveTodos();
    renderTodos();
  } else if (event.target.tagName === 'BUTTON') {
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(event.target.id));
    todos.splice(todoIndex, 1);
    saveTodos();
    renderTodos();
  }
})

// Next, We will create a if else if conditional to check if the input next to the todo was clicked or if the delete button for the todo was clicked
/**
 * 16. Create a if conditional that checks if the event target is equal to INPUT
 * - Use if statement to check if event.target.tagName is equal to 'INPUT'
 */


/**
 * 17. Add this line of code inside the curly braces of the if conditional you created in Step 16
 *  const todo = todos.find(todo => todo.id === parseInt(event.target.id));
 * 
 * This line of code is used to find a specific object in an array of objects based on a certain condition, such as the `id` property of the object matching the `id` property of an HTML element that triggered an event.
 * There is a more in depth description in the Javascript_Cheatsheet.md file
 * 
 * Add a console.log after this line of code: console.log(todo);
 * After step 17 completion check: add 3 items to the list and select the second item. In the console, the information for the second item will be shown
 */


/**
 * 18. We need to determine if a todo is completed by getting the value on the event.target.checked property
 * - Set the todo.completed attribute equal to event.target.checked
 * 
 * Find out more about event.target.checked on the Javascript_Cheatsheet.md
 */


/**
 * 19. After we have marked a todo as completed, we have to save and render the todos.
 * To do this, we must call the saveTodos() and renderTodos() functions:
 *  - call the saveTodos() function
 *  - call the renderTodos() function
 * 
 * This should be 2 lines of code: First line calls the saveTodos function, Second line calls the renderTodos function
 * Completion Check: Refresh the browser, add a couple todos, check the box beside at least one todo, the todo should be crossed out
 */


/**
 * 20. Create else if statement to add another condition to check if the delete button was clicked
 * - Use else if statement to check if event.target.tagName is equal to 'BUTTON'
 */ 

/**
 * 21. Find the index of the item in the array that matches to id of the todo
 * Add this code inside the curly braces of the else if statement you created in Step 20:
 *    const todoIndex = todos.findIndex(todo => todo.id === parseInt(event.target.id));
 * 
 * Further explanation of this line of code is located in the Javascript_Cheatsheet.md file
 */


/**
 * 22. We are currently in the line of code that determines that the delete button was clicked for the current todo.
 * When the delete button is clicked, we want to remove this todo from the list. To do this, use the built in function splice()
 * - Use splice to remove the first todo item in the array that has the todoIndex we found in Step. 21
 */


/**
 * 23. After we have deleted a todo, we have to now save and render the todos list again.
 * To do this, we must call the saveTodos() and renderTodos() functions
 * - call the saveTodos() function
 * - call the renderTodos() function
 * 
 * 2 lines of code: First line calls the saveTodos function, Second line calls the renderTodos function
 */


/**
 * 24. Everything should be working now!
 * Test out the application in the browser - Add some todos, mark some completed and delete a couple
 */


/**
 * 25. Uncomment out this code.
 * This allows us to keep our list of todos without having to rewrite them each time by using the localStorage in our browser
 * 
 * Refresh the page: Notice how the todos are still there.
 * NOTE: You may have to add some todos and then refresh to see this working.
 */
// Load saved todos from local storage
if (localStorage.getItem('todos')) {
  todos = JSON.parse(localStorage.getItem('todos'));
  renderTodos();
}