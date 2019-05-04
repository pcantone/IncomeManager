

var eventList = []
var currentEvent = null

function init(){
  currentEvent = new event(tempPrompt,tempChoices,tempConsequence);
  personalAttr = new phaseTwo();
}

/* Event Class */
function event(prompt, choices, con){
  this.prompt = prompt;
  this.choices = choices;
  this.consequence = con;
}

tempPrompt = "Yard sale day is coming up, you have the opportunity to get rid of some old items:"

/* List of Choices */
tempChoices = [
  "Spend a few hours selling old items",
  "Hold onto your goods",
  "Do another thing that I couldn’t think of an option for",
]

/* List of Functions */
tempConsequence = [
  () => {setHealth(-10)},
  () => {setMoney(-50) },
  () => {  },
]

currentEvent = new event(tempPrompt,tempChoices,tempConsequence);

var eventList = []

function clickeChoice( indexOfChoice ){
  currentEvent.consequence[indexOfChoice]();
}
