/*Plx create a new method call setWorkstrike() with variable workstrike*/

EventList = [
  new event( /*Event 1*/
    //Promp
    "Yard sale day is coming up, you have the opportunity to get rid of some old items:",
    //Choices
    [
      "Spend a few hours selling old items",
      "Hold onto your goods",
      "Buy a gift for yourselves"
    ],
    //Actions
     [
      () => { setMoney(+150) , setHappyness(-20) },
      () => { setHappyness(+10) },
      () => { setMoney(-20), setHappyness(+20) },
    ],
  ),
    new event( /*Event 2*/
        //Promp
        "Your car insurance is due soon, fail to pay insurance means you cant legally drive your car",
        //Choices
        [
            "Pay the insurance $140",
            "Don't pay the insurance",
            "Don't drive anymore and just take the bus to work"
        ],
        //Actions
        [
            () => { setMoney(-140)},
            () => {/*NEED IMPLEMENT: Queue pay car insurance later*/},
            () => {/*NEED IMPLEMENT: Bus fee $10 everyday*/  },
        ],
    ),
    new event( /*Event 3*/
        //Promp
        "You best friend ask to borrow $50 from you",
        //Choices
        [
            "Give him $50",
            "Don't give him the money",
            "Offer him to stay in your room"
        ],
        //Actions
        [
            () => { setMoney(-50) , setHappyness(+15)},
            () => { setHappyness(-10) },
            () => { setHappyness(-10) },
        ],
    ),
    new event( /*Event 4*/
        //Promp
        "Your landowner demand the rent of $???(depended on the apartment you choice previously)",
        //Choices
        [
            "Pay $???",
            "Don't pay but stay in side",
            "Move to another cheaper places"
        ],
        //Actions
        [
            () => { setMoney()  },
            () => { /*NEED_IMPLEMENT: You still live there for 10 days until Eviction, you are forced out*/},
            () => { setHappyness(-50) },
        ],
    ),
    new event( /*Event 5*/
        //Promp
        "You just come to this new city, you need to find an apartment", // This event must run first before any housing issue happen
        //Choices
        [
            "Choice a cheap apartment faraway from city center $400",
            "Choice a medium apartment not too faraway from city center $500",
            "Choice a expensive apartment near city center $600"
        ],
        //Actions
        [
            () => { setMoney(-400) , setHappyness(-10) /*NEED_IMPLEMENT: Transportation cost everyweek: $30*/},
            () => { setMoney(-500) /*NEED_IMPLEMENT: Transportation cost everyweek: $15*/},
            () => { setMoney(-600), setHappyness(+20) /*NEED_IMPLEMENT: Transportation cost everyweek: $5*/},
        ],
    ),
    new event( /*Event 6*/
        //Promp
        "Your car's turning light break down, you take it to the mechanic and it cost $210",
        //Choices
        [
            "Pay for the repair $210",
            "Don't repair",
            "Try to repair it youself"
        ],
        //Actions
        [
            () => { setMoney(-210)},
            () => { /*NEED_IMPLEMENT: Could stop by police and get a fine of $400*/ },
            () => { setMoney(-120), setWorkstrike(+1)},
        ],
    ),
    new event( /*Event 7*/
        //Promp
        "Your Utility bill is due, what do you want to do?",
        //Choices
        [
            "Pay the bill $150",
            "Just pay for the water $70",
            "Just pay for the gas $30"
        ],
        //Actions
        [
            () => { setMoney(-150)},
            () => { setMoney(-70), setHappyness(-20) },
            () => { setMoney(-30), setHappyness(-40), setHealth(-20) },
        ],
    ),
    new event( /*Event 8*/
        //Promp
        "Your $220 student loan is overdue, what should you do",
        //Choices
        [
            "Pay $220",
            "Don't pay",
            "Ask your parent to help out"
        ],
        //Actions
        [
            () => { setMoney(-220) , setHappyness(-10)},
            () => { /*THIS WILL AFFECT THE LIFE AFTER GAME ENDED*/ },
            () => { setMoney(-120) /*Your parent will help to pay $100*/ },
        ],
    ),
    new event( /*Event 9*/
        //Promp
        "Your friend ask you to go to a concert together:",
        //Choices
        [
            "Go to the concert $30",
            "Don't go",
            "Buy the album of the band"
        ],
        //Actions
        [
            () => { setMoney(-30) , setHappyness(+35)},
            () => { setHappyness(-30) },
            () => { setMoney(-15), setHappyness(+20) },
        ],
    ),
    new event( /*Event 10*/
        //Promp
        "Your best friend's birthday party is coming up, if you go you have to get some gift to your friend",
        //Choices
        [
            "Pay for the gift $20",
            "Don't go to the party",
            "Go to the party with no gift"
        ],
        //Actions
        [
            () => { setMoney(-20) , setHappyness(+30)},
            () => { setHappyness(-20) },
            () => { setHappyness(+10) },
        ],
    ),
    new event( /*Event 11*/
        //Promp
        "Your ex call you",
        //Choices
        [
            "Pick up the phone",
            "Pick up the phone and try to win his/her heart again",
            "Don't pick up"
        ],
        //Actions
        [
            () => { setHappyness(+10) },
            () => { setHappyness(+20) },
            () => {  },
        ],
    ),
    new event( /*Event 12*/
        //Promp
        "Your landlord raise the rent by $150 without warning",
        //Choices
        [
            "Pay the $150",
            "Try to negotiate with your landlord",
            "Move away, and take the next day to find a new place"
        ],
        //Actions
        [
            () => { setMoney(-150)},
            () => { /*50% chance of negotiate not to increase, otherwise still pay $150 */ },
            () => { setWorkstrike(+1) },
        ],
    ),
    new event( /*Event 13*/
        //Prompt
        "Your mother is ill, she need $150 to buy the medication needed, but she don't have that money",
        //Choices
        [
            "Give her the money $100",
            "Give her half of the money $50",
            "Don't give her the money",
        ],
        //Actions
        [
            () => { setMoney(-100) , setHappyness(+40)},
            () => { setMoney(-50), setHappyness(+20) },
            () => { setHappyness(-20) },
        ],
    ),
    new event( /*Event 14*/
        //Promp
        "You need to select a health plan for you",
        //Choices
        [
            "Golden plan $290",
            "Silver plan $240",
            "Bronze plan $200"
        ],
        //Actions
        [
            () => { setMoney(-290) /*You need to pay 20% for every medical expense*/},
            () => { setHappyness(-240) /*You need to pay 30% for every medical expense*/},
            () => { setMoney(-200) /*You need to pay 40% for every medical expense*/},
        ],
    ),

]
