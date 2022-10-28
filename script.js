const addButton = document.getElementById("add-name-btn")
const newNameInput = document.getElementById("name-input-box")
const allNamesContainer = document.getElementById("member-name-box")
const resetButton = document.getElementById("reset-btn")
const assignMemberButton = document.getElementById("assign-member-btn")

let waitingList = []

function addNewName() {
  let newName = newNameInput.value

  function addNameToArray() {
    waitingList.push(newName)
  }
  addNameToArray()
  //add the name inputs to an array
  let addName = document.createElement("p")
  addName.innerHTML = newName
  allNamesContainer.appendChild(addName)
  newNameInput.value = ""
}

// reset the names when button is pressed

function resetNames() {
  while (allNamesContainer.firstChild) {
    allNamesContainer.removeChild(allNamesContainer.firstChild)
  }
}

// shuffle the original array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

//split the shuffled array into smaller arrays of 3
function splitTeams(arr, teamSize) {
  let splitTeamArray = []
  for (let i = 0; i < arr.length; i += teamSize) {
    const team = arr.slice(i, i + teamSize)
    splitTeamArray.push(team)
  }
  return splitTeamArray
}

//when button is clicked, the waiting list gets shuffled
assignMemberButton.onclick = function () {
  shuffle(waitingList)
  splitTeams(waitingList, 3)
}

// let teamSize = 3
