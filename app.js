const log = console.log;

let goodMorning = (yourName) => {return(`Good morning ${yourName}`)}

log(goodMorning('Toto'));

let greet = (votreNom, cb) => {
    const myName = 'Georges';
    log(`My name is ${myName} ${cb(votreNom)}`)
}

greet('Max', goodMorning);