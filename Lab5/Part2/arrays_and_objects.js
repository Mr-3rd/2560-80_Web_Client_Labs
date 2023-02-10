/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.

  console.log(iss_location.iss_position.latitude)
  console.log(iss_location.iss_position.longitude)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates['CHF'] = 1.1787
console.log(rates)

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
let exchangeRate = 100 * rates['AUD'];
console.log(exchangeRate)

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

// set greatest to represent negative infinity - used to measure if a number is the largest
let greatest = -Infinity;
// initialize a variable to define the key of an object pair
let key;
// collect the key from each rate's pair in the object
for (let rateKey in rates) {
  // if the value of the rate Key is more than any other in the above for loop
  if (rates[rateKey] > greatest) {
    //Store the key
    key = rateKey;
    //Store the rate
    greatest = rates[key];
  }
}
// Log the rate pair in the console
console.log(key, greatest);




/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name
console.log(cats_and_owners[1].cat)

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
// create the last object location holder of the list
let lastListLocation = cats_and_owners.length
// define an object in the array using the last location
cats_and_owners[lastListLocation] = {}
// Add the owner name and cat name to the object in the array
cats_and_owners[lastListLocation].name = "Taylor Swift"
cats_and_owners[lastListLocation].cat = 'Meredith'
console.log(cats_and_owners[lastListLocation])
console.log(cats_and_owners)

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
// loop over each array item
cats_and_owners.forEach( function (petSet) {
  // Store the owner and cat name as variables
  let ownerName = petSet.name
  let petName = petSet.cat
  // Use a template string to display the variables
  console.log(`${ownerName} owns the cat ${petName}`)
})


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        } //individual
        ,
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        } //individual
        ,
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        } //individual
      ] //list
    } //category
    ,
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        } //individual
        ,
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        } //individual
        ,
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }  //individual
      ]  //list
    } //category
    ,
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }  //individual
        ,
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        } //individual
        ,
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        } //individual
      ] //list
    } //category
    ,
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        } //individual
      ] //list
    } //category
    ,
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        } //individual
      ] // list
    } //category
    ,
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        } // individual winner
      ] //list of economics laureates
    } //category = economics
  ] //[Array list of prize categories]
} //prizes = main dictionary key: [Array list of prizes]

console.log(nobel_prize_winners_2017.prizes[5].laureates[0].firstname)

// TODO print the full name of the Literature Nobel laureate.
console.log(nobel_prize_winners_2017.prizes[3].laureates[0].firstname + " "
    + nobel_prize_winners_2017.prizes[3].laureates[0].surname)

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// loop over all prizes to pull the groups of details
nobel_prize_winners_2017.prizes.forEach( function (laureateGroups){
  // if the group of details matches the physic category
  if (laureateGroups.category === 'physics') {
    // loop over each laureate winner
    laureateGroups.laureates.forEach( function (individualWinner){
      // display their id number
      console.log(individualWinner.id)
    })
  }
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
nobel_prize_winners_2017.prizes.forEach( function (prizeGroups){
  // display each prize category
  console.log(prizeGroups.category)})

// TODO write code to print the total number of prize categories
console.log(nobel_prize_winners_2017.prizes.length)

// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

// initialize the total number of laureate winners
let total2017Laureates = 0;
// loop over the prizes and collect the group details
nobel_prize_winners_2017.prizes.forEach( function (prizeGroups){
  // only count laureates from 2017
  if (prizeGroups.year === '2017') {
    // add the length of those laureates to the total number of laureates
    total2017Laureates = total2017Laureates + prizeGroups.laureates.length
  }
})
// display total prize laureates
console.log(total2017Laureates)

