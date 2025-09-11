const log = console.log;    //global scope


//Create empty 'div'
const bodyDiv = document.createElement('div');
//Create text node
const text = document.createTextNode('A simple body div');
//Append the text node to the bodyDiv
bodyDiv.append(text);
document.body.append(bodyDiv);
bodyDiv.classList.add('blue');      //CSS
log(bodyDiv);

const result = document.getElementById('result');
log(result); 

const heading = document.createElement('h2');
const textHeading = document.createTextNode('dynamic heading');
heading.append(textHeading);

document.body.insertBefore(heading, result); 
heading.classList.add('red');       //CSS
//document.body'.insertBefore(heading, bodyDiv);
log(heading);
let smallHeading = document.createElement('h6');
let smallHeadingText =document.createTextNode('I am small heading');
smallHeading.append(smallHeadingText);
smallHeading.classList.add('red');
document.body.append(smallHeading);

document.body.replaceChild(smallHeading, bodyDiv);
log(smallHeading);