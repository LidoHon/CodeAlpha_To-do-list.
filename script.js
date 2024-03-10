function addTask() {
	var taskInput = document.getElementById('taskInput');
	var taskText = taskInput.value.trim();

	if (taskText !== '') {
		var taskList = document.getElementById('taskList');
		var li = document.createElement('li');
		li.innerHTML =
			'<span onclick="toggleTask(this)">' +
			taskText +
			'</span> <button onclick="removeTask(this)">Remove</button>';
		taskList.appendChild(li);
		taskInput.value = '';
	} else {
		alert('Please enter a task!');
	}
}

function removeTask(button) {
	var li = button.parentNode;
	li.parentNode.removeChild(li);
}

function toggleTask(span) {
	span.parentNode.classList.toggle('done');
}
