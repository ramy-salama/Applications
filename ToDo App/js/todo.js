let theInput = document.querySelector(".add-task input"),
    theAddButton = document.querySelector(".add-task .plus"),
    tasksContainer = document.querySelector(".tasks-content"),
    tasksCount = document.querySelector(".tasks-count span"),
    tasksComleted = document.querySelector(".tasks-completed span");

window.onload = function () {
    theInput.focus();
};

theAddButton.onclick = function () {

    if (theInput.value === '') {

        console.log("No Value");

    }else {

        let noTasksMsg = document.querySelector(".no-tasks-message");

        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

            noTasksMsg.remove();

        }

        let mainSpan = document.createElement("span");

        let deleteElement = document.createElement("span");

        let text = document.createTextNode(theInput.value);

        let deleteText = document.createTextNode("Delete");

        mainSpan.appendChild(text);

        mainSpan.className = "task-box";

        deleteElement.appendChild(deleteText);

        deleteElement.className = "delete";

        mainSpan.appendChild(deleteElement);

        tasksContainer.appendChild(mainSpan);

        theInput.value = '';

        theInput.focus();

        calculateTasks();

    }

};

document.addEventListener('click', function (e) {

    if (e.target.className == 'delete') {

        e.target.parentNode.remove();

        if (tasksContainer.childElementCount == 0) {

            creatNoTasks();

        }

    }

    if (e.target.className == 'task-box') {

        e.target.classList.toggle('finished');

    }

    calculateTasks();

});

function creatNoTasks() {

    let msgSpan = document.createElement("span");

    let msgtext = document.createTextNode("No Tasks To Show");

    msgSpan.appendChild(msgtext);

    msgSpan.classList = 'no-tasks-message';

    tasksContainer.appendChild(msgSpan)

    theInput.focus();

}

function calculateTasks() {

    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    tasksComleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}