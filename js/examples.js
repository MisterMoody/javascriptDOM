/*  EXAMPLE 1: MODIFY CONTENT using HTMLElement.style Property  */
//  SELECT (Reference) an Element
const textStyles = document.getElementById('textStyles');
//  Event Listener to 'Listen for' Mouse-Clicks
  //  Functions to 'Modify Content' on 'Mouse-Click'
textStyles.addEventListener('click', () => {
  textStyles.style.color = 'red';               // Set Text-Color   
  textStyles.style.backgroundColor = 'black';   // Set Bkgrd-Color    
  textStyles.style.border = '2px dashed gold';  // Set Border 
  textStyles.style.fontSize = '2em';            // Set Font-Size
  textStyles.style.fontWeight = '100';          // Set Font-Weight 
  textStyles.style.lineHeight = '2';            // Set Line-Height
  textStyles.style.textAlign = 'center';        // Set Text-Alignment
});
////////////////////////////////////////////////////////////////////////


/*  EXAMPLE 2: RESET Modified Content */
//  SELECT (Reference) an Element
const textStyleZ = document.getElementById('textStyleZ');
const resetButton = document.getElementById('resetButton');
//  Event Listener to 'Listen for' Mouse-Clicks
  //  Function to 'Modify Content' on 'Mouse-Click'
textStyleZ.addEventListener('click', () => {
  textStyleZ.style.color = 'red';               // Set Text-Color
  textStyleZ.style.backgroundColor = 'black';   // Set Bkgrd-Color    
});
  //  Function to 'Reset' Modified Content on 'Mouse-Click'
resetButton.addEventListener('click', () => {
  textStyleZ.style.color = 'black';             // Reset Text-Color
  textStyleZ.style.backgroundColor = '#eff6ff';   // Reset Bkgrd-Color    
});
////////////////////////////////////////////////////////////////////////


/*  EXAMPLE 3:  Use 'Input' to Modify Content */
//  SELECT (Reference) an Element
const textInputStyle = document.getElementById('textInputStyle');
const inputButton = document.getElementById('inputButton');
const textInput = document.getElementById('textInput');
//  Event Listener to 'Listen for' Mouse-Clicks
  //  Functions to 'Modify Content' on 'Input'
inputButton.addEventListener('click', () => {
  // Use Input to Set Text-Color on 'textInputStyle'
  textInputStyle.style.color = textInput.value;  
});
////////////////////////////////////////////////////////////////////////


/*  EXAMPLE 4:   */
//  SELECT (Reference) an Element
const myList = document.getElementsByTagName('li')
//  Function to 'Iterate over all <li>'
  //  Makes color for all <li> 'purple'
for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}
//  SELECT (Reference) an Element
const notPurple = document.getElementsByClassName('not-purple')
//  Function to 'Iterate over <li> with class="not-purple" '
  //  Makes color 'red' for <li> with the class 'not-purple'
for (let i = 0; i < notPurple.length; i += 1) {
  notPurple[i].style.color = 'red';
}
//  SELECT (Reference) an Element
const evens = document.querySelectorAll('li:nth-child(even)');
//  Function to 'Iterate over all <li>'
  //  Makes the background color for every-other <li> 'lightgray'
for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}
////////////////////////////////////////////////////////////////////////

// Alert Button Notification --------------------
const alertBTN = document.getElementById('alertBTN');
alertBTN.addEventListener('click', () => {
  alert('This is a user notification. Add content here to display a useful message notifiying the user of important information.')
});
// ----------------------------------------------

// Tooltip Description --------------------------
const tooltip = document.getElementById('tooltip');
tooltip.title = "the quality or condition of being specific";
// ----------------------------------------------

// Toggle Element (on HOVER) ---- **BROKEN** ----
  //  this function does HIDE the List....
  //  ...but does NOT REVEAL the list on re-click
const toggler = document.getElementById('toggler');
const foodList = document.querySelector('div.elementToToggle');
const toggledElement = document.querySelector('p.toggledElement');

toggler.addEventListener('click', () => {
  //  User 'click' will 'HIDE' <element>
  if (foodList.style.display == 'none') {
    toggler.textContent = 'Hide Food List';
    foodlist.style.display = 'block';
  }
  //  User 'click' will 'REVEAL' <element>
  else {
    toggler.textContent = 'Show Food List'
    foodList.style.display = 'none';
  }
});
// ----------------------------------------------

// Toggle Element (on CLICK) -------------------
const hoverList = document.querySelector('.hoverList');
hoverList.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});
hoverList.addEventListener('mouseout', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});
// ----------------------------------------------


// Modify Text ----------------------------------
const p = document.querySelector('p.description');
const modifyInput = document.querySelector('input.description');
const modifyBTN = document.querySelector('button.description');

modifyBTN.addEventListener('click', () => {
  p.textContent = modifyInput.value;
});
// ----------------------------------------------
