// alert('hello')


let homeScore = 0 
let guestScore = 0 

document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").innerText = guestScore



function add1home(){
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore;
    console.log(homeScore)
    
}

function add2home(){
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore;
    console.log(homeScore)
    
}

function add3home(){
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore;
    console.log(homeScore)
    
}


function add1guest(){
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore;
    console.log(guestScore)
    
}

function add2guest(){
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore;
    console.log(guestScore)
    
}

function add3guest(){
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore;
    console.log(guestScore)
    
}

function clearhome(){
    homeScore = 0
    document.getElementById("home-score").textContent = homeScore;
}

function clearguest(){
    guestScore = 0
    document.getElementById("guest-score").textContent = guestScore;
}