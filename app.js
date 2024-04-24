/*
    Functions that you will need:
    1 .createElement()
    2 .appendChild()
    3 .setAttribute()
    4 .getElementById()
    5 .removeChild()
    6 .addEventListener()

    Properties that you might need:
    1 .innerHTML
    2 .textContent
*/


function createListItem(todoListText) {

  // Create a <div> element and store it in a variable

  // Add an id called "todo-item" to that div using .setAttribute()

  // Create a <p> element and store it in a variable

  // Add the todoListText to the <p> element you created earlier

  // Add the <p> element to the <div> you created earlier

  // Create a <button> element and store it in a variable

  // Add "Delete" to the inside of your <button> you just created

  // Use .addEventListener("click", deleteItem) with the button variable

  // Add the <button> to <div> you created earlier

  // Get the element with the id "todo-list" and store it into a variable

  // Add the <div> to the element you just stored into a variable in the line above
}


function deleteItem(e) {
  // Do not delete listItem  
  const listItem = e.currentTarget.parentElement;

  // Get the element with the id "todo-list" and store it into a variable

  // Remove listItem from that variable you just created
}

/*
 PLEASE WRITE A SHORT DESCRIPTION ON WHAT EACH DO:

    1 .createElement():
Creates an element node.
    2 .appendChild():
Appends a node (element) as the last child of an element.
    3 .setAttribute():
Sets a new value to an attribute. If the attribute does not exist, it is created first.
    4 .getElementById():
Returns an element with a specified value. Returns null if the element does not exist.
    5 .removeChild():
Removes an element's child.
    6 .addEventListener():
Attaches an event handler to a document.
    7 .innerHTML:
Sets or returns the HTML content (inner HTML) of an element.
    8 .textContent:
Sets or returns the text content of the specified node, and all its descendants.
*/


////////////// DO NOT EDIT ANY CODE BELOW THIS LINE //////////////

// variable referencing the todo-input element
const todoInput = document.getElementById("todo-input");

// variable referencing the form
const form = document.getElementById("todo-form");

// attaching the addItem function to the form when it's submitted
form.addEventListener("submit", addItem);

// adding the todo text to the page after submit
function addItem(e) {
    e.preventDefault();
    const value = todoInput.value.trim();
    if (value === "") return;
    createListItem(value);
    todoInput.value = "";
  }