var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    var taskItemE1 = document.createElement("li");
    taskItemE1.className = "task-item";

    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info";

    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    taskItemE1.appendChild(taskInfoE1);
    tasksToDoE1.appendChild(taskItemE1);
}

formE1.addEventListener("submit", createTaskHandler);