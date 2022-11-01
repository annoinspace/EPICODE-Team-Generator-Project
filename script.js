const addButton = document.getElementById("add-name-btn")
const newNameInput = document.getElementById("name-input-box")
const allNamesContainer = document.getElementById("member-name-box")
const resetButton = document.getElementById("reset-btn")
const assignMemberButton = document.getElementById("assign-member-btn")
const teamQueue = document.querySelector("#team-queue")
const numberOfTeamsElement = document.getElementById("number-of-teams-display")
const addTeamButton = document.getElementById("plus-one")
const removeTeamButton = document.getElementById("minus-one")
const teamOutputSection = document.getElementById("output-section-row")
let waitingList = []
let numberOfTeams = 2
// add team card and remove when + and - buttons are pressed
//  assign number of teams to a variable so we can keep track

function createTeams() {
  for (let i = 0; i < numberOfTeams; i++) {
    teamOutputSection.innerHTML += `<div class="flex team-member-container"
<h4>Team ${i + 1}</h4>
<ul>
</ul>
</div>
`
  }
}

window.onload = function () {
  createTeams()
}

function addTeam() {
  let value = parseInt(numberOfTeamsElement.value)
  value = isNaN(value) ? 2 : value

  value++
  numberOfTeamsElement.value = value

  numberOfTeams++
}

removeTeamButton.onclick = function () {
  let value = parseInt(numberOfTeamsElement.value)
  value = isNaN(value) ? 0 : value
  if (value > 2) {
    value--
    numberOfTeamsElement.value = value
  } else {
    numberOfTeamsElement.value = value
  }
  removeTeamCard()
  numberOfTeams--
}

function addPerson() {
  if (newNameInput.value !== "") {
    const li = document.createElement("li")
    li.innerText = newNameInput.value
    newNameInput.value = ""
    teamQueue.appendChild(li)
  }
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

let teamIndex = 0

function assign() {
  const randomPos = Math.floor(Math.random() * teamQueue.children.length)
  const person = randomPos

  if (person) {
    const teams = document.querySelectorAll(".team-member-container > ul")
    if (teamIndex === numberOfTeams) {
      teamIndex = 0
    }
    teams[teamIndex].appendChild(person)
    teamIndex++
    console.log("working")
  }
}

function assignAll() {
  while (teamQueue.children.length > 0) {
    assign()
  }
}

function removeTeamCard() {
  teamOutputSection.removeChild(teamOutputSection.lastChild)
}

// for each array in split team array, we

//when button is clicked, the waiting list gets shuffled
assignMemberButton.onclick = function () {
  shuffle(waitingList)
  // splitTeams()
  // assignMembers()
}
