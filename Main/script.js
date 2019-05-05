var currentEvent = null
var phaseTwo = null
var bufferEvent = []

/* Soon to be reference to the buttons */
var phase1Div = null
var optionButtonList = []
var phase2Div = null

function init(){
  pushEvent();
  person = people["Johnny"];
  // currentEvent = EventList[0]
  //phaseTwo = new phaseTwo();

  phase1Div = document.getElementById("phase1")
  questionPrompt = document.getElementById("question")
  optionButtonList = document.getElementsByClassName("optionsButton")

  phase2Div = document.getElementById("phase2")
  phaseOneSetup()
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
// Follows a simplpe Stack procedure
function pushEvent(){
  bufferEvent.append(EventList[ parseInt(Math.random()*EventList.length,10) ])
}
function popEvent(){

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
