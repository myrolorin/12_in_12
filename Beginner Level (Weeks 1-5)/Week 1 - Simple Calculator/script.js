// Setup for input box and button elements
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Setup for calculation
let string = "";
let arr = Array.from(buttons);

// Function to handle button clicks and key presses
function handleInput(value) {
    // Enter or '=' button to evaluate
    if (value === '=' || value === 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch (error) {
            input.value = 'Error';
        }
    }

    // Escape or 'AC' button to clear all
    else if (value === 'AC' || value === 'Escape') {
        string = "";
        input.value = string;
    }

    // Backspace or 'DEL' button to delete the last value
    else if (value === 'DEL' || value === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    }

    // Remaining buttons
    else if (/^[0-9%\/*\-+.]$/.test(value)) {
        string += value;
        input.value = string;
    }
}

// Event listener for button clicks
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Event listener for keyboard input
document.addEventListener('keydown', (e) => {
    e.preventDefault();
    handleInput(e.key);
});