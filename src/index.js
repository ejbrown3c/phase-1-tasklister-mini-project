document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    createNewTask(event.target["new-task-description"].value)
    form.reset()
  })
});

let listItem = document.createElement('p') // creates <p> for list
let deleteButton = document.createElement('button') // creates delete button
let editButton = document.createElement('button')  // creates edit button
let editInput = document.createElement('label') // labels the edit button

listItem.className = "listItem"

editButton.textContent = 'Edit'
      editInput.type="text";
      editButton.className = "edit";
      editButton.innerText = "Edit"

deleteButton.textContent = 'Done'
    deleteButton.innerText = "Done"
    deleteButton.className = "deleteButton"



function createNewTask(newTask) {
  listItem.textContent = `${newTask}`
  listItem.appendChild(editButton)
  listItem.appendChild(deleteButton)
  document.querySelector("#list").appendChild(listItem)
}

function changingEvents (){
  editButton.addEventListener('click', editPreviousTask)
  deleteButton.addEventListener('click', deleteTask)
}

const editListItem = document.getElementById("listItem")
console.log(editListItem)

function editPreviousTask() {
  if (editListItem.contentEditable = true) {
    editListItem.style.backgroundColor = "gray";
  } else editListItem.contentEditable = false; {
    editListItem.style.backgroundColor = "white"
  }
}

function deleteTask(event) {
  event.target.parentNode.remove()
}





