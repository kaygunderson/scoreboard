let homeScoreEl = document.getElementById("home-score")
let resetEl = document.getElementById("reset-score")

console.log(homeScoreEl)
console.log(resetEl)

let homeScore = 0

function increaseHomeScoreOne () {
    homeScore = homeScore + 1
    homeScoreEl.innerText = homeScore
    
}

function increaseHomeScoreTwo () {
    homeScore = homeScore + 2
    homeScoreEl.innerText = homeScore
    
}

function increaseHomeScoreThree () {
    homeScore = homeScore + 3
    homeScoreEl.innerText = homeScore
    
}

let guestScoreEl = document.getElementById("guest-score")

console.log(guestScoreEl)

let guestScore = 0

function increaseGuestScoreOne () {
    guestScore = guestScore + 1
    guestScoreEl.innerText = guestScore
    
}

function increaseGuestScoreTwo () {
    guestScore = guestScore + 2
    guestScoreEl.innerText = guestScore
}

function increaseGuestScoreThree () {
    guestScore = guestScore + 3
    guestScoreEl.innerText = guestScore
}
