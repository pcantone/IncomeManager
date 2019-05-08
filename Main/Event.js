/*Plx create a new method call setWorkstrike() with variable workstrike*/

EventList = [
  new event( /*Event 1*/
    "yardSale",
    //Promp
    "Yard sale day is coming up, you have the opportunity to get rid of some old items",
    //Choices
    [
      "Spend a few hours selling old items",
      "Hold onto your goods",
      "Buy a gift for yourself"
    ],
    //Actions
     [
      () => { setMoney(+150); setHappiness(-20) },
      () => { setHappiness(+10) },
      () => { setMoney(-20); setHappiness(+20) },
    ],
    //Consequences
    [
        "Preparing for the yard sale is tiring, but you do make $150.",
        "You don't make any extra cash, but you do get to keep your stuff.",
        "You buy yourself something you really wanted, but you spent $20."
    ],
  ),
    new event( /*Event 2*/
      "carInsurance",
        //Promp
        "Your car insurance is due soon, failing to pay the insurance means you cant legally drive your car",
        //Choices
        [
            "Pay the $140 insurance",
            "Don't pay the insurance",
            "Don't drive anymore and just take the bus to work"
        ],
        //Actions
        [
            () => { setMoney(-140)},
            () => {/*NEED IMPLEMENT: Queue pay car insurance later*/},
            () => {/*NEED IMPLEMENT: Bus fee $10 everyday*/  },
        ],
        //Consequences
        [
            "You keep your insurance and pay $140, you also get to continue to drive your car.",
            "You take the risk of driving without insurance, but you will eventually have to pay the bill.",
            "You have to ride the bus everyday which costs $10 daily, but you don't have to pay the insurance."
        ],
    ),
    new event( /*Event 3*/
      "friendBorrow",
        //Promp
        "You best friend asks to borrow $50 from you to help him pay his rent.",
        //Choices
        [
            "Give him $50",
            "Don't give him the money",
            "Offer him to stay at your place"
        ],
        //Actions
        [
            () => { setMoney(-50) , setHappiness(+15)},
            () => { setHappiness(-10) },
            () => { setHappiness(-10) },
        ],
        //Consequences
        [
            "You give your friend the money and it makes you feel good that you can help out.",
            "You let him know you can't lend him any money, and you feel embarassed you couldn't help out.",
            "You offer to let him stay at your place, but you aren't too happy you'll have to host him."
        ],
    ),
    new event( /*Event 4*/
      "carInsurance",
        //Promp
        "Your landlord demands rent of $"+getAppartmentPrice(),
        //Choices
        [
            "Pay $"+getAppartmentPrice() ,
            "Don't pay and get evicted",
            "Move to a cheaper apartment"
        ],
        //Actions
        [
            () => { setMoney(person.apartmentPrice) },
            () => { /*NEED_IMPLEMENT: You still live there for 10 days until Eviction, you are forced out*/},
            () => { setHappiness(-50) },
        ],
        //Consequences
        [
            "You pay your rent and ",
            "You fail to pay rent and you will get evicted in 10 days and be forced to find another place to live.",
            "You move out and are forced to find another place to live, you also must pay for moving costs."
        ],
    ),
    new event( /*Event 5*/
      "findApartment",
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
            () => { setMoney(-400) , setHappiness(-10) /*NEED_IMPLEMENT: Transportation cost everyweek: $30*/},
            () => { setMoney(-500) /*NEED_IMPLEMENT: Transportation cost everyweek: $15*/},
            () => { setMoney(-600), setHappiness(+20) /*NEED_IMPLEMENT: Transportation cost everyweek: $5*/},
        ],
        //Consequences
        [
            "You choose a cheap apartment, but it is far from the city and your job.",
            "You choose a mid-priced apartment that is just outside the city and your job.",
            "You choose an high-end apartment in the heart of the city just around the corner from your job."
        ],
    ),
    new event( /*Event 6*/
      "carBreakdown",
        //Promp
        "Your car's turning light breaks, you take it to the mechanic and it costs $210",
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
        //Consequences
        [
            "You pay the $210 repair cost and continue to use your car normally.",
            "You don't pay for the repairs, but you could get stopped by the police and fined.",
            "You take a day off work to repair it yourself, you boss gives you a work strike and it costs $120 for car parts."
        ],
    ),
    new event( /*Event 7*/
      "payUtility",
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
            () => { setMoney(-70), setHappiness(-20) },
            () => { setMoney(-30), setHappiness(-40), setHealth(-20) },
        ],
    ),
    new event( /*Event 8*/
      "studentLoan",
        //Promp
        "Your $220 student loan is overdue, what should you do",
        //Choices
        [
            "Pay $220",
            "Don't pay",
            "Ask your parent to pay a portion"
        ],
        //Actions
        [
            () => { setMoney(-220) , setHappiness(-10)},
            () => { /*THIS WILL AFFECT THE LIFE AFTER GAME ENDED*/ },
            () => { setMoney(-120) /*Your parent will help to pay $100*/ },
        ],
    ),
    new event( /*Event 9*/
      "friendConcert",
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
            () => { setMoney(-30) , setHappiness(+35)},
            () => { setHappiness(-30) },
            () => { setMoney(-15), setHappiness(+20) },
        ],
    ),
    new event( /*Event 10*/
      "friendBirthday",
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
            () => { setMoney(-20) , setHappiness(+30)},
            () => { setHappiness(-20) },
            () => { setHappiness(+10) },
        ],
    ),
    new event( /*Event 11*/
      "exCall",
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
            () => { setHappiness(+10) },
            () => { setHappiness(+20) },
            () => {  },
        ],
    ),
    new event( /*Event 12*/
      "rentIncrease",
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
      "motherMeds",
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
            () => { setMoney(-100) , setHappiness(+40)},
            () => { setMoney(-50), setHappiness(+20) },
            () => { setHappiness(-20) },
        ],
    ),
    new event( /*Event 14*/
      "healthInsurance",
        //Promp
        "You need to select a health insurance plan for yourself",
        //Choices
        [
            "Golden plan $290",
            "Silver plan $240",
            "Bronze plan $200"
        ],
        //Actions
        [
            () => { setMoney(-290) /*You need to pay 20% for every medical expense*/},
            () => { setHappiness(-240) /*You need to pay 30% for every medical expense*/},
            () => { setMoney(-200) /*You need to pay 40% for every medical expense*/},
        ],
    ),
    new event( /*Event 15*/
      "motherDoctor",
        //Promp
        "Your mother is sick and you consider taking a day off to go to the doctor with her",
        //Choices
        [
            "Go to work",
            "Call out and go with her",
            "Pay for her doctor's visit"
        ],
        //Actions
        [
            () => { setHappiness(-25); /**/},
            () => { setWorkstrike(+1); setHappiness(+25) /**/},
            () => { setMoney(-300) /**/},
        ],
        //Consequences
        [
            "Going to work helps you out financially, but you did miss out on being with your mother.",
            "Your boss gives you a work strike, but you did get to be there for your mother.",
            "You get to stay at work and help out your mother, but you do have to pay for a $300 doctors visit."
        ],
    ),
    new event( /*Event 16*/
      "childVacc",
        //Promp
        "Your son/daughter requires vaccinations for school",
        //Choices
        [
            "Take time off and bring to doctor for vaccinations",
            "Keep your child out of school until a later time",
            "Ask a friend to take child for vaccinations"
        ],
        //Actions
        [
            () => { setWorkstrike(+1); setMoney(-100); /**/},
            () => {  setHappiness(-25) /**/},
            () => { setMoney(-100) /**/},
        ],
    ),
]
