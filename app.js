const log = console.log;    //global scope

//GET ATTRIBUTE
const first = document.querySelector('.first'); //Récupère 1er élément ".first"
const classValue = first.getAttribute('id'); //1er attribut de type 'id'(class..)
log(classValue);                             // valeur de l'attribut:"2emeAtt"
//log(firstValue.textContent);               // text of class of first.

const link = document.getElementById('link');
const linkValue = link.getAttribute('href');
log(linkValue);


//SET ATTRIBUTE
let allFirstElements = document.querySelectorAll('.first');
log(allFirstElements);                       //NodeList

const last = link.nextElementSibling;
log(last);
last.setAttribute('class', 'first');
last.textContent = 'I now have a class attribute';
log(last);

allFirstElements = document.querySelectorAll('.first');
log(allFirstElements);   