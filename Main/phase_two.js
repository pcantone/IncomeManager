
var person = null
var job = null
var dayCounter = 0;
var payDay = 14;

chanceOfPhysicalIll = null
chanceOfMentalIll = null

timeTillNextHeater = 15

/* Person Attribute Class */
function phaseTwo(j){
    job = j; //job object

    chanceOfPhysicalIll = getPDemand() - getPTolerance()
    chanceOfPhysicalIll = chanceOfPhysicalIll > 10 ? chanceOfPhysicalIll : 10

    // chanceOfMentalIll = getMDemand() - getMTolerance()
    // chanceOfMentalIll = chanceOfMentalIll > 10 ? chanceOfMentalIll : 10

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
  dayCounter++
  payDay--
  if(payDay <= 0){
    payDay = 14
    setMoney( job.pay * job.hours * 10)
  }
  // timeTillNextHeater--
  // if( timeTillNextHeater < 1)
  //   pushEvent()
  updateCurrentEvent()
}
var moneyCheck  = null;
function phaseTwoManager(){
    if (document.getElementById("box1").checked){
      //family time: add happiness (check for family)
    }
    if(document.getElementById("box2").checked){
      //pay insurance
      moneyCheck = person.getMoney() - 120;
    }
    if(document.getElementById("box3").checked){
      //Pay taxes
      moneycheck = person.getMoney() - 120;
    }
    if(document.getElementById("box4").checked){
      //Buy cheap food
      moneycheck = person.getMoney() - 5;
      person.setHealth(-5);
    }
    if(document.getElementById("box5").checked){
      //buy healthy food
      moneycheck = person.getMoney() - 10;
      person.setHealth(5);
    }
    if (getMoney() <= 0)
      ;
    nextEvent();

}
