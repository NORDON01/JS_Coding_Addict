const log = console.log;

num1 = 6;
log(num1 + " is a " + typeof num1);
num2 = "6";
log(num2 + " is a " + typeof num2);

let value = num1 == num2;
log(value + " num1 equals num2");

value = num1 === num2;
log(value + " num1 & num2 are not the same type");
