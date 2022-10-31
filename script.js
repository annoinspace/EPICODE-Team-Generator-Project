const addButton = document.getElementById("add-name-btn")
const newNameInput = document.getElementById("name-input-box")
const allNamesContainer = document.getElementById("member-name-box")
const resetButton = document.getElementById("reset-btn")
const assignMemberButton = document.getElementById("assign-member-btn")

const numberOfTeamsElement = document.getElementById("number-of-teams-display")
const addTeamButton = document.getElementById("plus-one")
const removeTeamButton = document.getElementById("minus-one")

let waitingList = []
let numberOfTeams = 0
// add team card and remove when + and - buttons are pressed
//  assign number of teams to a variable so we can keep track

addTeamButton.onclick = function () {
  let value = parseInt(numberOfTeamsElement.value)
  value = isNaN(value) ? 0 : value
  value++
  numberOfTeamsElement.value = value
  // add new card
  createTeamCard()
  numberOfTeams++
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
  removeTeamCard()
  numberOfTeams--
}

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
  newNameInput.value = ""

  while (teamOutputSection.firstChild) {
    teamOutputSection.removeChild(teamOutputSection.lastChild)
  }
  numberOfTeamsElement.value = 0
  waitingList = []
  numberOfTeams = 0
}

// shuffle the original array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

// //split the shuffled array into smaller arrays of 3
// let splitTeamArray = []
// let splitTeams = function (arr, teamSize) {
//   for (let i = 0; i < waitingList.length; i += numberOfTeams) {
//     const team = waitingList.slice(i, i + numberOfTeams)
//     splitTeamArray.push(team)
//   }
//   return splitTeamArray
// }

// console.log(splitTeamArray)

// function assignMembers() {
//   for (let i = 0; i < splitTeamArray.length; i++) {
//     for (let j = 0; j < splitTeamArray[j].length; j++) {
//       console.log(splitTeamArray[i][j])
//     }
//   }
// }

let teamSize = waitingList / numberOfTeams

const teamOutputSection = document.getElementById("output-section")
let newCard = document.createElement("div")

function createTeamCard() {
  document.ad
  newCard.classList.add(
    "team-member-container",
    "flex",
    "column",
    "border-shadow"
  )
  newCard.classList.add("border-shadow")
  newCard.innerHTML = `${waitingList}`
  let newHeader = document.createElement("h3")
  newHeader.innerText = `Team ${numberOfTeams + 1}`
  newHeader.classList.add("team-header", "flex")
  let newDiv = document.createElement("div")
  newDiv.classList.add("team-container")
  newDiv.appendChild(newHeader)
  newDiv.appendChild(newCard)
  teamOutputSection.appendChild(newDiv)
}

function removeTeamCard() {
  teamOutputSection.removeChild(teamOutputSection.lastChild)
}

// function assignMembers() {
//   let nameArea = document
//     .getElementById("output-section")
//     .querySelector("team-member-container")
//   nameArea.innerText = `${waitingList}`
// }

// for each array in split team array, we

//when button is clicked, the waiting list gets shuffled
assignMemberButton.onclick = function () {
  shuffle(waitingList)
  // splitTeams()
  // assignMembers()
}
