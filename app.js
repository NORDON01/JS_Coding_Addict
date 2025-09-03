const log = console.log;    //global scope

let people = [
    {name:'bob', age:20, position: 'developer', salary: 200},
    {name:'peter', age:25, position: 'designer', salary: 300},
    {name:'suzan', age:30, position: 'the boss', salary: 500},
    {name:'anna',  age:35, position: 'the boss', salary: 500}
]

const total = people.reduce(function(acc, currItem){
        log(`Total ${acc}`);
        log(`Current money: ${currItem.salary}`);
        acc += currItem.salary;
    return acc;            //COMPULSORY    
}, 0);                     //initial value 0 => acc will be an integer

log(`Total : ${total}`);