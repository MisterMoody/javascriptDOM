/*  EXAMPLE 1: MODIFY CONTENT using HTMLElement.style Property  */
//  SELECT (Reference) an Element
const textStyles = document.getElementById('textStyles');

//  Event Listener to 'Listen for' Mouse-Clicks
  //  Functions to 'Modify Content' on 'Mouse-Click'
textStyles.addEventListener('click', () => {
  textStyles.style.color = 'red';               // Set Text-Color on 'textStyles'  
  textStyles.style.backgroundColor = 'black';   // Set Background-Color    
  textStyles.style.border = '2px dashed gold';  // Set Border 
  textStyles.style.fontSize = '2em';            // Set Font-Size
  textStyles.style.fontWeight = '100';          // Set Font-Weight 
  textStyles.style.lineHeight = '2';            // Set Line-Height
  textStyles.style.textAlign = 'center';        // Set Text-Alignment
});


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


/*  EXAMPLE 2: RESET Modified Content */
//  SELECT (Reference) an Element
const textStyleZ = document.getElementById('textStyleZ');
const resetButton = document.getElementById('resetButton');

//  Event Listener to 'Listen for' Mouse-Clicks
  //  Function to 'Modify Content' on 'Mouse-Click'
textStyleZ.addEventListener('click', () => {
  textStyleZ.style.color = 'red';               // Set Text-Color on 'textStyleZ'
  textStyleZ.style.backgroundColor = 'black';   // Set Background-Color    
});

  //  Function to 'Reset' Modified Content on 'Mouse-Click'
resetButton.addEventListener('click', () => {
  textStyleZ.style.color = 'black';             // Reset Text-Color
  textStyleZ.style.backgroundColor = '#eff6ff';   // Reset Background-Color    
});


////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////


/*  EXAMPLE 4:   */
//  SELECT (Reference) an Element
const myList = document.getElementsByTagName('li')
//  Functions to 'Iterate over all <li>'
  //  Makes color for all <li> 'purple'
for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

//  SELECT (Reference) an Element
const notPurple = document.getElementsByClassName('not-purple')
//  Functions to 'Iterate over <li> with class="not-purple" '
  //  Makes color 'red' for <li> with the class 'not-purple'
for (let i = 0; i < notPurple.length; i += 1) {
  notPurple[i].style.color = 'red';
}



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


/*  EXAMPLE 5:   */


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////




/*
    Selecting Elements via /selecting_elements.html FILE
*/
////////////////////////////////////////////////////////////////////////
/* Example #1: Click-Event (Text) */
//Select <html> Element
//const myHeading = document.getElementById('myHeading');


//Listen for User-Interaction
//Calls .addEventListener(); Method on Selected Element
  //On Mouse-Click, the Headline Changes Text to Red
//myHeading.addEventListener('click', () => {myHeading.style.color = 'red';});


////////////////////////////////////////////////////////////////////////
/* Example #2: Click-Event (Button) */
//Select <html> Element
//const buttonHeadline = document.getElementById('buttonHeadline');
//const engageButton = document.getElementById('engageButton');

//Listen for User-Interaction
//Calls .addEventListener(); Method on Selected Element
  //On Button-Click, the Headline Changes Text to Green
//engageButton.addEventListener('click', () => {buttonHeadline.style.color = 'skyblue';});


////////////////////////////////////////////////////////////////////////
/* Example #3: Input-Event */
//Select <html> Element
//const headline = document.getElementById('headline');
//const myButton = document.getElementById('myButton');
//const myTextInput = document.getElementById('myTextInput');

//Listen for User-Interaction
//Calls .addEventListener(); Method on Selected Element
  //User 'input' dictates what color will transform Headline color
//myButton.addEventListener('click', () => {headline.style.color = myTextInput.value;});