// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
}
sayHello();
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
function sayHelloToSamip() {
    console.log("Hello, Samip!");
}
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
function eatLunch(food) {
    console.log(`I am eating ${food} for lunch.`);
}
eatLunch("mac n cheese");
eatLunch("spaghetti and meatballs");
eatLunch("lasagna");
eatLunch(1);
//Note that in the above, JavaScript coerces the number 1 to the string "1"
function say(greeting, firstName) {
    console.log("I was called!"); //To both log and return like we want to, console.log() comes first
    return(`${greeting}, ${firstName}`);
}
say("Goodbye", "Julio");

function add(x, y) {
    return x+y;
}
console.log(add(1, 2));
//Our function is doing the addition

function calculator(num1, num2){
    const message =`The sum of your numbers is: ${add(num1, num2)}`;
    return message;
}
console.log(calculator(1, 2));
/* Let's say we're creating a simple calculator function. A high-level outline of how it could work might be:

1.the calculator function asks the user to enter two numbers they want to be added together,
2.the values are stored into variables (num1 and num2, perhaps),
3.the function then calls the add() function, passing num1 and num2 as arguments,
4.the add() function returns the sum
5.the calculator function returns a message to the user telling them what the sum is.*/