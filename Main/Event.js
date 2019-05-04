EventList = [
  new event(
    //Promp
    "Yard sale day is coming up, you have the opportunity to get rid of some old items:",
    //Choices
    [
      "Spend a few hours selling old items",
      "Hold onto your goods",
      "Do another thing that I couldn't think of an option for"
    ],
    //Actions
     [
      () => { setMoney(+10) },
      () => {  },
      () => {  },
    ],
  ),
  new event(
    "",
    [],
    [],
  )

]
