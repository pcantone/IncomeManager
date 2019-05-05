var people = {"Johnny":new person("Johnny",'Amelia', 'Bella',['Carlift','Server','Warehouse Worker'], 60,80),
            "Victoria":new person("Victoria",'','',['Janitor','Busperson','Cook'],50,70),
            "Steven":new person("Steven",'Lucas','Sierra',['Internship','Cashier','Security'], 100,100),
            "Rachel":new person("Rachel",'','Lula',['Retail','Delivery','Barista'],60,90),
            "David":new person("David",'Emma','',['Cook','Cashier','Retail'] ,30,50),
            "Donald":new person("Donald",'Ivanka','Betty', ['Internship','Security','Warehouse Worker'], 60,60),
            "Andrew":new person("Andrew",'','Molly', ['Janitor','Retail','Carlift'],90,80),
            "Nathan":new person("Nathan",'Parker','Mike', ['Barista','Retail','Internship'], 90,90)};

function person(name,family,pet,potjb,pt,mt,mon){
    this.name = name;
    this.family = [];
    this.family.push(family);
    this.pet = [];
    this.pet.push(pet);
    this.potentialJob = potjb;
    this.physicalTolerance = pt;
    this.mentalTolerance = mt;
    this.money = 1000;
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
function getMoney(){
    return person.getMoney();
}
