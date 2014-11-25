var shoppingList = {
    taskInput: document.getElementById('item'),
		completeTaskHolder: document.getElementById('complete'),
		incompleteTaskHolder: document.getElementById('incomplete'),
    listname: document.getElementsByTagName('ul'),
    addButton: document.getElementById('submit'),
	
		validate: function(){
		var item = document.getElementById('item').value;

		if (name.value == ""){
     window.alert("Please enter your name.");
    item.focus();

    return false;
    }

		},
	

createNewTaskElement: function(taskString) {
			//Create List Item
  var listItem = document.createElement("li");

  //input (checkbox)
   var checkBox = document.createElement("input");// checkbox
  //label
   var label = document.createElement("label");
  //input (text)
   var editInput = document.createElement("input");// text
  //button.edit
   var editButton = document.createElement("button");
  //button.delete
   var deleteButton = document.createElement("button");
  
  checkBox.type = "checkbox";
  
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  checkBox.className = "checkit";

  
  label.innerText = taskString;
  
  
  shoppingList.listItem.appendChild(checkBox);
  shoppingList.listItem.appendChild(label);
  shoppingList.listItem.appendChild(editInput);
  shoppingList.listItem.appendChild(editButton);
  shoppingList.listItem.appendChild(deleteButton);

  return listItem;
},


		addItem: function(){
			console.log("Add task...");
      var listItem = createNewTaskElement(taskInput.value);
  //Append listItem to incompleteTasksHolder
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
  
      taskInput.value = "";
     },

    editTask: function() {
      console.log("Edit task...");

    var listItem = this.parentNode;
  
    var editInput = listItem.querySelector("input[type=text");
    var label = listItem.querySelector("label");
  
    var containsClass = listItem.classList.contains("editMode");
  
  //if the class of the parent is .editMode
    if(containsClass) {
    //Switch from .editMode
    //label text become the input's value
      label.innerText = editInput.value;
    } else {
    //Switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
    }
  
  //Toggle .editMode on the list item
   listItem.classList.toggle("editMode");
  
  },

//Delete an existing task
  deleteTask: function() {
    console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
  
  //Remove the parent list item from the ul
  ul.removeChild(listItem);
  },

//Mark a task as complete
  taskCompleted: function() {
    console.log("Task complete...");
  //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  },

//Mark a task as incomplete
  taskIncomplete:function() {
    console.log("Task incomplete...");
  //Append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
  },

   bindTaskEvents: function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
  //select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
  
  //bind editTask to edit button
    editButton.onclick = editTask;
  
  //bind deleteTask to delete button
   deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
    },

// //Set the click handler to the addTask function
//     addButton.addEventListener("click", addTask);

// //cycle over incompleteTasksHolder ul list items
//     for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
//   //bind events to list item's children (taskCompleted)
//     bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
//     }

// //cycle over completedTasksHolder ul list items
//     for(var i = 0; i < completedTasksHolder.children.length; i++) {
//   //bind events to list item's children (taskIncomplete)
//     bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
//     }
  };

   window.onload = function(){
    shoppingList.initialize();
    }

    


































