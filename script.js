// script.js

// Get references to existing elements
const mainHeading = document.querySelector('h1');
const recipeTitle = document.querySelector('h2');
const firstParagraph = document.querySelector('p');
const ingredientsList = document.querySelector('ul');
const preparationSteps = document.querySelector('ol');
const cookingTipsList = document.querySelector('ul:last-of-type');
const recipeTable = document.querySelector('table');
const bodyElement = document.body;

// Array of different font families
const fonts = ['Arial', 'Georgia', 'Verdana', 'Times New Roman', 'Courier New', 'Brush Script MT'];
let currentFontIndex = 0;

// Function to change the font of the main heading
function changeHeadingFont() {
    mainHeading.style.fontFamily = fonts[currentFontIndex];
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
}

// Function to modify the background color of the body
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    bodyElement.style.backgroundColor = randomColor;
}

// Function to add a new cooking tip
function addCookingTip() {
    const newTipItem = document.createElement('li');
    const newTipParagraph = document.createElement('p');
    newTipParagraph.textContent = 'Try adding a squeeze of lime for extra zest!';
    newTipItem.appendChild(newTipParagraph);
    cookingTipsList.appendChild(newTipItem);
}

// Function to remove the last ingredient
function removeLastIngredient() {
    if (ingredientsList.lastElementChild) {
        ingredientsList.removeChild(ingredientsList.lastElementChild);
    } else {
        alert('No ingredients to remove!');
    }
}

// Create "Change Font" button
const fontButton = document.createElement('button');
fontButton.textContent = 'Change Heading Font';
fontButton.addEventListener('click', changeHeadingFont);
bodyElement.insertBefore(fontButton, mainHeading); // Insert before the heading

// Create "Change Background" button
const backgroundButton = document.createElement('button');
backgroundButton.textContent = 'Change Background';
backgroundButton.addEventListener('click', changeBackgroundColor);
bodyElement.insertBefore(backgroundButton, recipeTitle); // Insert before the first recipe title

// Create "Add Tip" button
const addTipButton = document.createElement('button');
addTipButton.textContent = 'Add Cooking Tip';
addTipButton.addEventListener('click', addCookingTip);
bodyElement.insertBefore(addTipButton, recipeTable); // Insert before the table

// Create "Remove Ingredient" button
const removeIngredientButton = document.createElement('button');
removeIngredientButton.textContent = 'Remove Last Ingredient';
removeIngredientButton.addEventListener('click', removeLastIngredient);
bodyElement.insertBefore(removeIngredientButton, preparationSteps); // Insert before preparation steps