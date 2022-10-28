const addButton = document.getElementById("add-name-btn")
const newNameInput = document.getElementById("name-input-box")
const allNamesContainer = document.getElementById("member-name-box")
const resetButton = document.getElementById("reset-btn")
const assignMemberButton = document.getElementById("assign-member-btn")
const teamOutput = document.getElementById("output-section")
const numberOfTeamsElement = document.getElementById("number-of-teams-display")
const addTeamButton = document.getElementById("plus-one")
const removeTeamButton = document.getElementById("minus-one")

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
let splitTeamArray = []
let splitTeams = function (arr, teamSize) {
  for (let i = 0; i < waitingList.length; i += 3) {
    const team = waitingList.slice(i, i + 3)
    splitTeamArray.push(team)
  }
  return splitTeamArray
}
console.log(splitTeamArray)

// for each array in split team array, we make a new team and append to the main container
function createTeamLayout() {
  for (let i = 0; i < splitTeamArray.length; i++) {
    let card = document.createElement("div")
    card.classList.add = "team-member-container flex column"

    teamOutput.appendChild(card)
  }
}

//number of teams

addTeamButton.onclick = function () {
  let value = parseInt(numberOfTeamsElement.value)
  value = isNaN(value) ? 0 : value
  value++
  numberOfTeamsElement.value = value
}

removeTeamButton.onclick = function () {
  let value = parseInt(numberOfTeamsElement.value)
  value = isNaN(value) ? 0 : value
  if (value >= 1) {
    value--
    numberOfTeamsElement.value = value
  } else {
    numberOfTeamsElement.value = value
  }
}

//when button is clicked, the waiting list gets shuffled
assignMemberButton.onclick = function () {
  shuffle(waitingList)
  splitTeams()
  createTeamLayout()
}
