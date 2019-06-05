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
  textStyles.style.textAlign = 'center';        // Set Text-Alignment
  textStyles.style.lineHeight = '2';            // Set Line-Height
});



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