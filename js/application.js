var shoppingList = {


  initialize: function() {
    shoppingList.taskInput = document.getElementById("new-task");
    shoppingList.addButton = document.getElementsByTagName("button")[0];
    shoppingList.incompleteTasksHolder = document.getElementById("incomplete-tasks");
    shoppingList.completedTasksHolder = document.getElementById("completed-tasks");
    for(var i = 0; i < this.incompleteTasksHolder.children.length; i++) {
      shoppingList.bindTaskEvents(this.incompleteTasksHolder.children[i], this.taskCompleted);
    }
    
    for(var j = 0; j < this.completedTasksHolder.children.length; j++) {
      shoppingList.bindTaskEvents(this.completedTasksHolder.children[j], this.taskIncomplete);
    }

    this.setListener();
  },

  setListener: function() {
    var self = this;
    self.addButton.onclick = function() {
      self.addTask();
    };
  },

  createNewTaskElement: function(taskString) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input"); 
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    editInput.type = "text";
  
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
  
    label.innerText = taskString;
  
  //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

  return listItem;
  },

  addTask: function(){
    console.log("Add task...");
    var listItem = this.createNewTaskElement(this.taskInput.value);
    this.incompleteTasksHolder.appendChild(listItem);
    this.bindTaskEvents(listItem, this.taskCompleted);
  
    this.taskInput.value = "";
  },

  editTask: function() {
  console.log("Edit task...");

  var listItem = this.parentNode;
  
  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");
  if(containsClass) {
    
    label.innerText = editInput.value;
  } 
  else {
    
    editInput.value = label.innerText;
  }
  
  
  listItem.classList.toggle("editMode");
    
  },

  deleteTask: function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  ul.removeChild(listItem);
  },

  taskCompleted: function() {
  console.log("Task complete...");
  var listItem = this.parentNode;
  shoppingList.completedTasksHolder.appendChild(listItem);
  shoppingList.bindTaskEvents(listItem, shoppingList.taskIncomplete);
  },

  taskIncomplete: function() {
  console.log("Task incomplete...");
  var listItem = this.parentNode;
  shoppingList.incompleteTasksHolder.appendChild(listItem);
  shoppingList.bindTaskEvents(listItem, shoppingList.taskCompleted);
  },


  bindTaskEvents: function(taskListItem, checkBoxEventHandler) {
  console.log(taskListItem);
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  //console.log(editButton.onclick);
  editButton.onclick = shoppingList.editTask;
  
  // deleteButton.addEventListener('click', shoppingList.deleteTask());
  deleteButton.onclick = shoppingList.deleteTask;
  
  
  checkBox.onchange = checkBoxEventHandler;
  },
};
  window.onload = shoppingList.initialize();
  // document.getElementById('button').addEventListener("click", function(e){
  //   e.preventDefault();
  //   shoppingList.addTask();
  // });
  // document.getElementById('button').addEventListener("click", function());



