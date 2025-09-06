const log = console.log;    //global scope

const fruit = document.querySelector('.special');
log(fruit);         //SÉLECTION DU 1er fruit de la classe ".special"  

const fruits = document.querySelectorAll('.special');
log(fruits);        //CECI EST UN ARRAY (une nodelist) => FOREACH est possible

fruits.forEach(function(fruit){
    log(fruit);
})