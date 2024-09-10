// Declaring the state variables for player AP and fungus HP
let fungusHP = 100
let playerAP = 100

// Declaring the setInterval variable so it can be cleared later
let regeneration = setInterval(fungusRegeneration, 1000)


// subtracts AP and HP from player/fungus totals based on which attack is chosen
    // stops AP and HP levels from going below 0
function updateTotals(attack){
    if (attack === 'arcane'){
        playerAP = Math.max(0, playerAP - 12);
        fungusHP = Math.max(0, fungusHP - 14);
    }else if(attack === 'entangle'){
        playerAP = Math.max(0, playerAP - 23);
        fungusHP = Math.max(0, fungusHP - 9);
    }else if(attack === 'dragon'){
        playerAP = Math.max(0, playerAP - 38);
        fungusHP = Math.max(0, fungusHP - 47);
    }else if(attack === 'star'){
        playerAP = Math.max(0, playerAP - 33);
        fungusHP = Math.max(0, fungusHP - 25);
    }
    
    render();

    // conditional to add jump or dead class when playerAP or fungusHP reaches 0
    if (playerAP === 0){
        let attackButtons = document.getElementsByClassName('attack-btn')
        // loop through the attack buttons and disable them if AP is 0
        for (let move of attackButtons){
            move.setAttribute('disabled', 'disabled')
        }
        let fungus = document.getElementById('fungus')
        fungus.classList.remove('walk')
        fungus.classList.add('jump')
        fungus.innerHTML += `<span class="failure">"Looks like you have mush-room for improvement..."</span`
        // Stops the HP regeneration
        clearInterval(regeneration)
        regeneration = null
    }else if (fungusHP === 0){
        let attackButtons = document.getElementsByClassName('attack-btn')
        // loop through the attack buttons and disable them if HP reaches 0
        for (let move of attackButtons){
            move.setAttribute('disabled', 'disabled')
        }
        let fungus = document.getElementById('fungus')
        fungus.classList.remove('walk')
        fungus.classList.add('dead')
        fungus.innerHTML += `<span class="victory">"You're not a very fun guy..."</span>`
        // Stops the HP regeneration
        clearInterval(regeneration)
        regeneration = null
    }

}

// If fungusHP > 49 does nothing, else, allows the setInterval function to run and add 1 to fungusHP per second
function fungusRegeneration(){
    if (fungusHP > 49){
        return;
    }

    fungusHP++
    console.log('Fungus is regenerating 1 HP/s! Current HP is:', fungusHP)
}



// Calls updateTotals function with 'arcane' when arcaneScepter button is clicked
function arcaneScepterHandler(){
    updateTotals('arcane');
    // console.log('updateTotals was called with arcane')
}
// Calls updateTotals function with 'entangle' when entangle button is clicked
function entangleHandler(){
    updateTotals('entangle');
    // console.log('updateTotals was called with entangle')
}
// Calls updateTotals function with 'dragon' when dragonBlade button is clicked
function dragonBladeHandler(){
    updateTotals('dragon');
    // console.log('updateTotals was called with dragon')
}
// Calls updateTotals function with 'star' when starFire button is clicked
function starFireHandler(){
    updateTotals('star');
    // console.log('updateTotals was called with star')
}

// updates the player AP and fungus HP on the DOM
function render(){
    let apDOM = document.getElementById('ap-text')
    apDOM.textContent = playerAP + ' ' + 'AP'
    let hpDOM = document.getElementById('hp-text')
    hpDOM.textContent = fungusHP + ' ' + 'AP'

    let apMeter = document.getElementById('ap-meter')
    apMeter.value = `${playerAP}`
    let hpMeter = document.getElementById('hp-meter')
    hpMeter.value = `${fungusHP}`
}
