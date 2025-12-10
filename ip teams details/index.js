let arr = [{
    shortName : "CSK",
    fullName: "Chennai Super Kings",
    primaryColor: "yellow",
    secondaryColor: "blue",
    trophies: 5
},
{
    shortName : "MI",
    fullName: "Mumbai Indians",
    primaryColor: "blue",
    secondaryColor: "gold",
    trophies: 5
},
{
    shortName : "RCB",
    fullName: "Royal Challengers Banglore",
    primaryColor: "red",
    secondaryColor: "gold",
    trophies: 1
},
{
    shortName : "KKR",
    fullName: "Kolkata Knight Riders",
    primaryColor: "purple",
    secondaryColor: "gold",
    trophies: 3
},
{
    shortName : "RR",
    fullName: "Rajasthan Royals",
    primaryColor: "Pink",
    secondaryColor: "blue",
    trophies: 1
},
{
    shortName : "SRH",
    fullName: "Sunrisers Hyderabad",
    primaryColor: "Orange",
    secondaryColor: "black",
    trophies: 1
},

{
    shortName : "DC",
    fullName: "Delhi Capital",
    primaryColor: "Red",
    secondaryColor: "blue",
    trophies: 0
},

{
    shortName : "PBKS",
    fullName: "Punjab Kings",
    primaryColor: "Red",
    secondaryColor: "silver",
    trophies: 0
},

{
    shortName : "GT",
    fullName: "Gujarat Titans",
    primaryColor: "royalblue",
    secondaryColor: "Gold",
    trophies: 1
},

{
    shortName : "LSG",
    fullName: "Lucknow Super Giants",
    primaryColor: "aqua",
    secondaryColor: "orange",
    trophies: 0
},

]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var box = document.querySelector('#box')
var main = document.querySelector('main')
var p =document.querySelector('#box p')

btn.addEventListener('click', function(){
    var teams =arr[Math.floor(Math.random()*arr.length)]
    h1.innerHTML = teams.fullName
    console.log(teams);
    main.style.backgroundColor = teams.primaryColor
    box.style.backgroundColor = teams.secondaryColor
    p.innerHTML = `shortName: ${teams.shortName} <br> trophies: ${teams.trophies}`;
    
    
})