// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Bradley Loeb" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies

document.getElementById('add-gb').addEventListener('click', function () {
    document.getElementById('qty-gb').innerHTML = gb++;
    document.getElementById('qty-total').innerHTML = total++;
})
document.getElementById('minus-gb').addEventListener('click', function () {
    document.getElementById('qty-gb').innerHTML = gb--;
    document.getElementById('qty-total').innerHTML = total--;
})
//Chocolate chip buttons
document.getElementById('add-cc').addEventListener('click', function () {
    document.getElementById('qty-cc').innerHTML = cc++;
    document.getElementById('qty-total').innerHTML = total++;
})
document.getElementById('minus-cc').addEventListener('click', function () {
    document.getElementById('qty-cc').innerHTML = cc--;
    document.getElementById('qty-total').innerHTML = total--;
})
//Sugar buttons
document.getElementById('add-sugar').addEventListener('click', function () {
    document.getElementById('qty-sugar').innerHTML = sugar++;
    document.getElementById('qty-total').innerHTML = total++;
})
document.getElementById('minus-sugar').addEventListener('click', function () {
    document.getElementById('qty-sugar').innerHTML = sugar--;
    document.getElementById('qty-total').innerHTML = total--;
})



 

    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked

// TODO: Hook up event listeners for the rest of the buttons