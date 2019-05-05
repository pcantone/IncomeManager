var potentialJobs = {'Carlift': new job("Carlift",10,8,5,2, "This is a not physically demanding Job, but it requires lots of driving"), 
        'Server':new job("Server",8,8,5,1, "This is a low physically demanding job that only requires serving food to tables")
        , 'Warehouse Worker':new job("Warehouse Worker",10,8,5,1,"This is a physicaly demanding job that requires lots of strength and mental toughness")
        , 'Janitor':new job("Janitor",10,10,5,2,"This a physically demanding job that requires not so much mental toughness")
        , 'Busperson':new job("Busperson",5,6,5,1,"This is a job that requires not so much physical strength and less mentally demanding than some jobs")
        , 'Cook':new job("Cook",9,7,5,3,"This is a low effort job that requires less physical effort but it is mentally demanding")
        , 'Internship':new job("Internship",10,8,5,3,"This is a low physical effort job but the 8 hour work weak takes a mental toll")
        , 'Cashier':new job("Cashier",8,8,5,2,"This is a less physically demanding job but it is moderately mentally demanding")
        , 'Security':new job("Security",8,12,5,1,"This is a physically demanding due to odd hours, and there is a slight mental toll")
        , 'Retail':new job("Retail",8,8,5,2, "This is a mentally demanding job because of customers, it is less physically demanding")
        , 'Delivery':new job("Delivery",5,8,5,2,"This is a physically demandin job but the nice drives are peaceful")
        , 'Barista':new job("Barista",7,8,5,1,"This job is mentally demanding to keep up with the rush, but it is less physically demanding")};

    function job(n,p,t,to,l,d){
    this.name = n;
    this.pay = p;
    this.hours = t;
    this.toll = to;
    this.jobLevel = l;
    this.jobstrikes = 3;
    this.desc = d;
}

function getPay(){
    return job.pay;
}
function getJob(){
    return job.name;
}
function getHours(){
    return job.hours;
}
function getToll(i){
    return job.toll[i];
}
function getEducationNeeded(i){
    return job.educationNeeded[i];
}
function getJobLevel(i){
    return job.jobLevel;
}
function getJobStrikes(){
    return job.jobstrikes;
}
function getStrike(){
    job.jobstrikes = job.jobstrikes - 1;
}
function getDesc(){
    return job.desc;
}
function getPDemand(){
    return job.toll;
}