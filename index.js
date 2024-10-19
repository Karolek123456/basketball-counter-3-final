
let homescreenEl = document.getElementById('home-screen')
let guestscreenEl = document.getElementById('guest-screen')

let count1 = 0
let count2 = 0

function homeAddOne() {
    count1 += 1
    homescreenEl.textContent = count1

}


function homeAddTwo() {
    count1 += 2
    homescreenEl.textContent = count1
}


function homeAddThree() {
    count1 += 3
    homescreenEl.textContent = count1
}

///////////////////////////\\\\\\\\\\\\\\\\\\\\\

function guestAddOne() {
    count2 += 1
    guestscreenEl.textContent = count2
}


function guestAddTwo() {
    count2 += 2
    guestscreenEl.textContent = count2
}


function guestAddThree() {
    count2 += 3
    guestscreenEl.textContent = count2
}

///////////////////////////\\\\\\\\\\\\\\\\\\\\\

function resetScore() {
    homescreenEl.textContent = 0
    guestscreenEl.textContent = 0
    count1 = 0
    count2 = 0
}
