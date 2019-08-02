
//Select <html> Elements
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
//  ADDs <button>s to Existing <li>
const lis = listUl.children;
/*  TARGETS '1st <li>' => Useful for 'Adding Features'
const firstListItem = listUl.firstElementChild;
firstListItem.style.backgroundColor = 'red';  */
/*
*/
/*  DECLARE FUNCTION that 'ADDS <button>s' that
    (1) Accepts a <li> as a Parameter + (2) Attaches <button>'s to it
    (*) It is called on the 'Add Item' Event-Handler on Line 64
*/
function attachListItemButtons(li) {
  //  CREATE 'MOVE-UP' <button>
  let up = document.createElement('button');
  up.className = 'up';            //  Adds 'Class Name'
  up.textContent = 'Up';          //  Adds 'Text-Content'
  li.appendChild(up);             //  Appends <btn> for any <li>
  //  CREATE 'MOVE-DOWN' <button>
  let down = document.createElement('button');
  //  Adds 'Class Name'
  down.className = 'down';        //  Adds 'Class Name'
  down.textContent = 'Down';      //  Adds 'Text-Content'
  li.appendChild(down);           //  Appends <btn> for any <li>
  //  CREATE 'REMOVE' <button>
  let remove = document.createElement('button');
  remove.className = 'remove';    //  Adds 'Class Name'
  remove.textContent = 'Remove';  //  Adds 'Text-Content'
  li.appendChild(remove);         //  Appends <btn> for any <li>
}
/*
*/
/*  LOOP through <li> 
    + CALL 'attachListItemButtons Function' on All <li>
    + 
*/
for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}
//  Listen for User-Interaction 
  //  == 'REMOVE a List-Item -or- MOVE it UP/DOWN (Button)'
listUl.addEventListener('click', (event) => {
  //  Condition to 'REMOVE a List-Item'
  if (event.target.tagName == 'BUTTON') {
    //  Only Remove <btn> 'IF equal to' class="remove". 
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);   
    }
    //  Move element UP on user-click. 
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      //  Only Move UP 'IF Not' firstChildOf
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    //  Move element DOWN on user-click. 
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      //  Only Move DOWN 'IF Not' lastChildOf
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});
/*
*/
//  Listen for User-Interaction == 'TOGGLE (HIDE-SHOW)'
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none'){
  toggleList.textContent = 'Hide All Items in Shaded Area';
  listDiv.style.display = 'block';
  } else {
  toggleList.textContent = 'Show All Items in Shaded Area';
  listDiv.style.display = 'none';
  }
});
/*
*/
//  EVENT-HANDLER == 'ADD Item to a List'
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  //  CREATES new <li>
  let li = document.createElement('li');
  //  SETS the <li> 'text'
  li.textContent = addItemInput.value;
  //  CALLS 'attachListItemButtons Function' on Event-Handler
  attachListItemButtons(li);
  //  APPENDS <li> to the DOM
  ul.appendChild(li);
  addItemInput.value = '';
});
/*
*/
//  Listen for User-Interaction == 'MODIFY TEXT (Click-event)' 
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

