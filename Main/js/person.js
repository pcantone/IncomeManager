function person(name,family,pet, pt,mt){
    this.name = name;
    this.family = [];
    this.family.append(family);
    this.pet = [];
    this.pet.append(pet);
    this.physicalTolerance = pt;
    this.mentalTolerance = mt;
}

function getName(){
    return person.name();
}
function getPotentialJob(i){
    return person.potentialJobs[i];
}
function getFamily(i){
    return person.getfamily[i];
}
function getPhysicalTolerance(){
    return person.physicalTolerance();
}
function getMentalTolerance(){
    return person.mentalTolerance();
}

var johnny = {"Johnny":new person("Johnny",'Amelia', 'Bella', 6,8)};
var victoria = {"Victoria":new person("Victoria",'','', 5,7)};
var steven = {"Steven":new person("Steven",'Lucas','Sierra', 10,10)};
var rachel = {"Rachel":new person("Rachel",'','Lula', 6,9)};
var david = {"David":new person("David",'Emma','', 3,5)};
var katia = {"Katia":new person("Katia",'Ruxi','Siqi', 5,6)};
var andrew = {"Andrew":new person("Andrew",'','Molly', 9,8)};

