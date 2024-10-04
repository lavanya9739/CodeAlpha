function add_item() {
	let item = document.getElementById("box");
	let list_item = document.getElementById("list_item");

	if (item.value !== "") {
		let make_li = document.createElement("li");

		let taskDiv = document.createElement("div");
		taskDiv.className = "task-text";
		taskDiv.appendChild(document.createTextNode(item.value));
		make_li.appendChild(taskDiv);

		let markButton = document.createElement("button");
		markButton.textContent = "Mark";
		markButton.classList.add("mark-btn");
		markButton.onclick = function() {
			make_li.classList.toggle("completed");
			if (make_li.classList.contains("completed")) {
				markButton.textContent = "✔"; 
			} else {
				markButton.textContent = "Mark"; 
			}
		};

		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.classList.add("delete-btn");
		deleteButton.onclick = function() {
			make_li.classList.add("fadeOut");
			setTimeout(function() {
				make_li.remove();
			}, 500);
		};

		make_li.appendChild(markButton);
		make_li.appendChild(deleteButton);
		list_item.appendChild(make_li);
		item.value = "";
	} else {
		alert("Please add a value to the item");
	}
}
