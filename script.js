const addButton = document.getElementById("add-name-btn")
const newNameInput = document.getElementById("name-input-box")
const allNamesContainer = document.getElementById("member-name-box")
const resetButton = document.getElementById("reset-btn")

let allNames = []

function addNewName() {
  let newName = newNameInput.value

  function addNameToArray() {
    allNames.push(newName)
  }
  addNameToArray()

  let addName = document.createElement("p")
  addName.innerHTML = newName
  allNamesContainer.appendChild(addName)
  newNameInput.value = ""
}

function resetNames() {
  while (allNamesContainer.firstChild) {
    allNamesContainer.removeChild(allNamesContainer.firstChild)
  }
}
