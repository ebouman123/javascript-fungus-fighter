// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Declaring the state variables for player AP and fungus HP
let fungusHP = 100
let playerAP = 100

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

}


// Calls updateTotals function with 'arcane' when arcaneScepter button is clicked
function arcaneScepterHandler(){
    updateTotals('arcane');
    console.log('updateTotals was called with arcane')
}
// Calls updateTotals function with 'entangle' when entangle button is clicked
function entangleHandler(){
    updateTotals('entangle');
    console.log('updateTotals was called with entangle')
}
// Calls updateTotals function with 'dragon' when dragonBlade button is clicked
function dragonBladeHandler(){
    updateTotals('dragon');
    console.log('updateTotals was called with dragon')
}
// Calls updateTotals function with 'star' when starFire button is clicked
function starFireHandler(){
    updateTotals('star');
    console.log('updateTotals was called with star')
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


function onReady() {
    console.log("Ready to go!")
    

}


onReady()