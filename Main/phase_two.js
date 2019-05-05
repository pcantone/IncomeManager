
var person = null
var job = null

chanceOfPhysicalIll = null
chanceOfMentalIll = null

timeTillNextHeater = 15

/* Person Attribute Class */
function phaseTwo(j){
    job = j; //job object

    chanceOfPhysicalIll = job.getPDemand() - person.getPTolerance()
    chanceOfPhysicalIll = chanceOfPhysicalIll > 10 ? chanceOfPhysicalIll : 10

    chanceOfMentalIll = job.getMDemand() - person.getMTolerance()
    chanceOfMentalIll = chanceOfMentalIll > 10 ? chanceOfMentalIll : 10

    // this.health = 100;
    // this.money = 100;
    // this.hunger = 100;
    // this.happiness = 100;
}

function checkIfIll(){
  if( Math.random() < .5)
    person.setPIll( Math.random()*100 < chanceOfPhysicalIll ? true : false )
  else
    person.setMIll( Math.random()*100 < chanceOfMentalIll ? true : false )
}

function nextEvent(){
  // timeTillNextHeater--
  // if( timeTillNextHeater < 1)
  //   pushEvent()
  pushEvent()
  phaseOneSetup()
}
