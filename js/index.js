// A02 - UI and Dynamic Content - MTM1526
// This is a script file for the above assignment 
// submitted by Masayo Williams

let fm = document.querySelector('form'); // get form to store submitted data
let newItem = document.getElementById('entry'); // get user entry as 'newItem'
let itemList = document.querySelector('ol'); // store all added items here (this is inside <ul>)
let fb = document.querySelector('.feedback'); // output feedback in here (this is inside <p>)
let allItems = []; // an array to store all items listed

function addItem(item) { 
   item.preventDefault(); // dont send data to server!

   let userInput = {}; // object container to keep user input

   if (newItem.value !== '') { // if the user did not submit an empty form, proceed:
      userInput.item = newItem.value; // take the data and add it to userInput
      allItems.push(newItem.value); // add new item to the list
      fb.textContent = ''; // clear feedback text
      itemList.innerText = ''; // clear the list

      for (let i of allItems) { // go over each item inside allItems and...
         let li = document.createElement('li'); // create a new <li> and call it 'li'
         li.textContent = i; // add item as a textContent to 'li'
         itemList.appendChild(li); // add 'li' to the itemList to output inside <ul>
      }
      fm.reset(); // clear the form field
      
   } else { // if user submits an empty form:
      fb.textContent = 'Add something to buy!'; // output error feedback
   }
   newItem.focus(); // put cursor in the input field
}

fm.addEventListener('submit', addItem); // when submitted, run addItem()