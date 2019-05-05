var currentEvent = null
var phaseTwo = null
var bufferEvent = []

/* Soon to be reference to the buttons */
var phase1Div = null
var optionButtonList = []
var phase2Div = null
var moneyReference = null
var dayReference = null
var payDayReference = null
var foodReference = null
function init(){
  person = people["Johnny"];
  // currentEvent = EventList[0]
  //phaseTwo = new phaseTwo();
  phase1Div = document.getElementById("phase1")
  questionPrompt = document.getElementById("question")
  optionButtonList = document.getElementsByClassName("optionsButton")
  moneyReference = document.getElementById("displayMoney")
  dayReference = document.getElementById("displayDay")
  payDayReference = document.getElementById("displayNextPayDay")
  foodReference = document.getElementById("displayFood")

  phase2Div = document.getElementById("phase2")
  updateCurrentEvent()
}

/* Event Class */
function event(id, prompt, choices, con){
  this.id = id;
  this.prompt = prompt;
  this.choices = choices;
  this.consequence = con;
}

function clickChoice( indexOfChoice ){
  if(job == null){
    tempJob = potentialJobs[person.potentialJob[indexOfChoice]];
    phaseTwo(tempJob);
  }
  currentEvent.consequence[indexOfChoice]()

  // startPhaseTwo()
}

function updateCurrentEvent(){
  if(bufferEvent.length < 2)
    pushEvent()
  popEvent()
  phaseOneSetup()
}

// Follows a simplpe Stack procedure
function pushEvent( optionalID ){
  if(typeof optionalID == 'undefined'){
    tempRand = parseInt(Math.random()*EventList.length,10)
    bufferEvent.push(EventList[ tempRand ])
    EventList.splice(tempRand,1)
  }
  else
    for (item of EventList)
      if(item.id == "optionalID"){
        bufferEvent.push(item)
        break
      }
}
function popEvent(){
  currentEvent = bufferEvent.pop()
}

function phaseOneSetup(){
  //phase1Div.style.display = "block"
  moneyReference.innerHTML = "Money: "+getMoney()
  dayReference.innerHTML = "Day: " + dayCounter;
  payDayReference.innerHTML = "Next Pay Day: " + payDay;
  foodReference.innerHTML = "Fod: " + getFood()

  questionPrompt.innerHTML = currentEvent.prompt
  for( let i = 0; i < 3 ; i++)
    optionButtonList[i].innerHTML = currentEvent.choices[i]
}


function beginGame(){
  window.location.href = "index.html";
}
