var currentEvent = null
var phaseTwo = null

/* Soon to be reference to the buttons */
var phase1Div = null
var optionButtonList = []
var phase2Div = null

function init(){
  pushEvent();
  // currentEvent = EventList[0]
  //phaseTwo = new phaseTwo();

  phase1Div = document.getElementById("phase1")
  questionPrompt = document.getElementById("question")
  optionButtonList = document.getElementsByClassName("optionsButton")

  phase2Div = document.getElementById("phase2")
  phaseOneSetup()
}

/* Event Class */
function event(prompt, choices, con){
  this.prompt = prompt;
  this.choices = choices;
  this.consequence = con;
}

function clickChoice( indexOfChoice ){
  currentEvent.consequence[indexOfChoice]();
  // startPhaseTwo()
}
function pushEvent(){
  currentEvent = EventList[ parseInt(Math.random()*EventList.length,10) ]
}
function phaseOneSetup(){
  //phase1Div.style.display = "block"
  questionPrompt.innerHTML = currentEvent.prompt
  for( let i = 0; i < 3 ; i++)
    optionButtonList[i].innerHTML = currentEvent.choices[i]
}
function beginGame(){
  window.location.href = "index.html";
}
