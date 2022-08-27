const form = document.getElementById("addForm");
const taskList = document.getElementById("taskList");

//"Add new Task" button
$("#addTask").on("click", () => {
    form.style.display = form.style.display == "flex" ? "none" : "flex";
});

//"Clear your tasks" button
$("#clearList").on("click", () => {
    $(taskList).empty();
});


//"X" button from Add item form
$("#addItemX").on("click", () => {
    $(form).css("display", "none");
});

//Add a new task procedure
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleInput = document.querySelector("#form-title");
    const dateInput = document.querySelector("#form-date");
    const priorityInput = document.querySelector("#form-priority");

    const taskTitle = titleInput.value;
    const taskColor = priorityInput.value;

    // Date Formatting
    var options = { weekday: 'long', year: '2-digit', month: '2-digit', day: '2-digit' };
    const taskDate = new Date(Date.parse(dateInput.value)).toLocaleString("en-US", options);

    if(!taskTitle || !taskDate) {
        alert("Please fill out the task");
        return;
    }

    const task = document.createElement("div"); 
    task.classList.add("list-element");

    const taskContent = document.createElement("div");
    taskContent.classList.add("list-element--content");

    const title = document.createElement("span");
    title.classList.add("list-element--title");

    const priority = document.createElement("span");
    priority.classList.add("list-element--priority", taskColor);

    title.appendChild(priority);
    title.innerHTML += taskTitle;

    const dueDate = document.createElement("span");
    dueDate.classList.add("list-element--due");
    dueDate.innerHTML = taskDate;

    taskContent.appendChild(title);
    taskContent.appendChild(dueDate);

    const xButton = document.createElement("div");
    xButton.classList.add("list-element--delete");

    const xSpan = document.createElement("span");
    xSpan.innerHTML = "X";
    xSpan.addEventListener("click", () => {
        task.remove();
    });

    xButton.appendChild(xSpan);

    task.appendChild(taskContent);
    task.appendChild(xButton);

    taskList.appendChild(task);

    titleInput.value = '';
    dateInput.value = '';
    priorityInput.value = 'green';
});
