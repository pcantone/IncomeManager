var people = {"Johnny":new Person("Johnny",'Amelia', 'Bella',['Carlift','Server','Warehouse Worker'], 60,80),
            "Victoria":new Person("Victoria",'','',['Janitor','Busperson','Cook'],50,70),
            "Steven":new Person("Steven",'Lucas','Sierra',['Internship','Cashier','Security'], 100,100),
            "Rachel":new Person("Rachel",'','Lula',['Retail','Delivery','Barista'],60,90),
            "David":new Person("David",'Emma','',['Cook','Cashier','Retail'] ,30,50),
            "Donald":new Person("Donald",'Ivanka','Betty', ['Internship','Security','Warehouse Worker'], 60,60),
            "Andrew":new Person("Andrew",'','Molly', ['Janitor','Retail','Carlift'],90,80),
            "Nathan":new Person("Nathan",'Parker','Mike', ['Barista','Retail','Internship'], 90,90)};

function Person(name,family,pet,potjb,pt,mt,mon){
    this.name = name;
    this.family = [];
    this.family.push(family);
    this.pet = [];
    this.pet.push(pet);
    this.potentialJob = potjb;
    this.physicalTolerance = pt;
    this.mentalTolerance = mt;
    this.money = 1000;
    this.food = 6;
}

function getName(){
    return person.name;
}
function getPotentialJob(i){
    return person.potentialJobs[i];
}
function getFamily(i){
    return person.getfamily[i];
}
function getPhysicalTolerance(){
    return person.physicalTolerance;
}
function getMentalTolerance(){
    return person.mentalTolerance;
}
function getMoney(){
    return person.money;
}
function getFood(){
    return person.food;
}

