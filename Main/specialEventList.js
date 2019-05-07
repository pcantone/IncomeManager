SpecialEventList = []

function initSpecial(){
    SpecialEventList.push(new event( /*Event 1*/
      "jobs",
      //Promp
      "You are looking for a job, please choose one of the following",
      //Choices
      [
        potentialJobs[person.potentialJob[0]].desc,
        potentialJobs[person.potentialJob[1]].desc,
        potentialJobs[person.potentialJob[2]].desc,
      ],
      //Actions
       [
        () => { tempJob = potentialJobs[person.potentialJob[0]]; phaseTwo(tempJob) },
        () => { tempJob = potentialJobs[person.potentialJob[1]]; phaseTwo(tempJob) },
        () => { tempJob = potentialJobs[person.potentialJob[2]]; phaseTwo(tempJob) },
      ],
      //Consquence
      [
        "Temp",
        "Temp",
        "Temp",
      ]
    ),
  )
}
