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

const heading = document.createElement('h2');
const textHeading = document.createTextNode('dynamic heading');
heading.append(textHeading);
document.body.append(heading); 
heading.classList.add('red');       //CSS
log(heading);