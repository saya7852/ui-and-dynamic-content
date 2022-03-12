# ui-and-dynamic-content
MTL1526 - A02 UI Assignment submitted by Masayo Williams

## Introduction
This is a program submitted for A02 - UI & Dynamic Content.  This is a widget that creates a shopping list.  
The project consists of index file in HTML5, JS to handle the form data, and CSS for styles.
The widget consists of a masthead, one text field, one submit button, and 3 social media links inside a footer.

## Usage
Users can enter item names in the form field, press enter, or click on the button to add the item to a list which displays below.
The added item is output in an ordered list, keeping track of the previously entered items.  The new item is added to the bottom of the list.
When nothing is entered in the form field, an error message will be output below the shopping list.
The footer contains 3 social media icon with links.

## JS Functionality
JavaScrip handles the form validation and dynamic content manipulation.  
There is one function addItems(): 
Submitted form data is validated and if entry is detected, the data is appended to an array.  
Each content of the array is subsequently placed inside a new <li> element and output inside an ordered list.
After each submission, the form is reset.  By default, the cursor is placed inside the form field.
Otherwise if no data is submitted, textContent outputs a message inside a paragraph.
