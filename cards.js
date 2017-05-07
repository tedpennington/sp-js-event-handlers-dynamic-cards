/*
Requirements:

1. Create an HTML page that contains a text area and a button labeled Create.

2. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

3. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
---------------------------------------------------
*/

console.log("cards.js loaded");

// Get elements from DOM that will be global
var createBtn = document.getElementById("create-btn");
var output = document.getElementById("output");
var input = document.getElementById("input");




// Create array to hold cards
var cards = [];


/*
Add event listener to Create Button which upon click:
1. Pushes input field to array
2. Creates new card with id assigned dynamically based on array position, content from array element, and a delete button.  Class of "cards" is assigned for styling. Class of "card-content" inserted to separate delete button from text of card.
*/
createBtn.addEventListener("click", function() {
    console.log("button was clicked");
    var newCardNum = cards.length + 1;
    console.log("newCardNum", newCardNum);
    cards.push(input.value);
    console.log("cards after push:", cards);
    output.innerHTML += `<div id="card${newCardNum}" class="cards"><h4>Card Number ${newCardNum}</h4><div class="card-content">${cards[cards.length - 1]}</div><button class="delete-cards">Delete</button></div>`;
    deleteButtons();
});

/*
Each time a card gets created above (when Create button pressed), the function below runs which:
1. Creates an array (HTML Collection) of all the delete buttons using their common class name (and overwriting any existing array of such)
2. Loops through all the delete buttons and adds event listeners to them which work by removing the closest element of type "div" (the div for each card), thereby deleting that card (which includes the delete button itself, as it's a child of that div)
*/


function deleteButtons(){
    var deleteBtns = document.getElementsByClassName("delete-cards");
    for (i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", function(event){
            console.log("hit delete button");
            output.removeChild(event.target.closest("div"));
        })
    };
}

// EXERCISE COMPLETE













