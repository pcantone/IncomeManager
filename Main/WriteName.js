

listOfPeople = ["Johnny","Jake","Jemman","Jsonny","Jed","Jack","Jenny","James"]


for(let i = 0; i < listOfPeople.length; i++){
  document.write(
    "<div class = 'row'> <div class=' col-md-2'></div> <div class='characterOption col-md-8'> " + listOfPeople[i] + " </div> <div class=' col-md-2'></div> </div>"
    )
}
