"use strict";
// printing 1 to 10 tables
/*function num(n) {
  for (let i = 1; i <= 10; i++) {
    let mul = `${n} * ${i} = ${i * n} `;
    console.log(mul);
  }
}
num(1);
num(2);
num(3);
num(4);
num(5);
num(6);
num(7);
num(8);
num(9);
num(10);

//sum of numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  console.log((sum += i));
}
//product of numbers
let prod = 1;
for (let i = 1; i <= 10; i++) {
  console.log((prod *= i));
}

//coding challenge 1

const marks_mass = 78;
const marks_height = 1.69;
const johns_mass = 92;
const johns_height = 1.95;
const marksBMI = marks_mass / (marks_height * marks_height);
const johnsBMI = johns_mass / (johns_height * johns_height);
console.log(marksBMI, johnsBMI);
const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);
//document.write("hello world");
const number = Number(prompt("enter your number : "));
const result = Math.sqrt(number);
console.log(`the square root of ${number} is ${result} `);
*/
//console.log(Math.floor(Math.random() * 10+1));

/*
//To find whether a number is odd or even
function even_odd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}
even_odd(53);

//Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun); //true
console.log(typeof true);     //boolean
console.log(typeof javascriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof 'Jonas'); //string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year); //number

console.log(typeof null); //object
*/
/*
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
//using string literal
 const jonas = "I'm " + firstName + ", a " + (year-birthYear) + "year old "  + job;
 console.log(jonas);
 console.log("String with\n\ multiple \n\ lines");
 //using template literal
 const jonas1 = `I'm ${firstName},a ${year-birthYear} year old ${job}`
 console.log(jonas1);
 console.log(`string with
 multiple
 lines`);
 */
/*
 //if-else condition
 const age = 15;
 if(age>=18){
   console.log(`Sarah can start driving licence`);
 }else{
   const yearsLeft = 18-age;
   console.log(`Sarah is too young...wait another ${yearsLeft} years`);
 }
const birthYear = 2014;
let century;
if(birthYear<=2000){
  century = 20;
}else{
  century = 21;
}
console.log(century)

//coding challenge 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const marks_bmi = massMark/heightMark*heightMark;
const johns_bmi = massJohn/heightJohn*heightJohn;
if(marks_bmi>johns_bmi){
  console.log(`mark has (${marks_bmi}) higher bmi than john (${johns_bmi})`)
}else{
  console.log(`john has (${johns_bmi}) higher bmi than mark (${marks_bmi})`)
}
//console.log(Number('Jonas'));
//console.log(typeof NaN);
console.log(String(23), 23);
*/
/*
//coding challenge 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy ');
 } else if (scoreKoalas > scoreDolphins) {
   console.log('Koalas win the trophy ');
 } else if (scoreDolphins === scoreKoalas) {
   console.log('Both win the trophy!');
 }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy ');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy ');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy');
}


//switch statement
const day = 'friday';

switch(day){
  case 'monday' :
  console.log('plan course structure');
  console.log('go to coding meetup');
  break;
  case 'tuesday':
  console.log('prepare theory videos');
  break;
  case 'wednesday' :
  case 'thursday' :
  console.log('write code examples')
  break;
  case 'friday':
  console.log('record videos');
  break;
  case 'saturday':
  case 'sunday':
  console.log('Enjoy the weekend');
  break;
  default : console.log('not a valid day')
}

//ternary operator
const age = 23;
const drink = age >= 18 ? 'wine ' : 'water';
console.log(drink);

//coding challenge 4
const bill = 400;
const tip = bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`the bill value ${bill} and the tip value ${tip},so the final value is ${bill+tip}`);
*/

/*
//functions declaration
function displayName(name){
  console.log(`my name is ${name}`);
}
displayName('bhagi')
//function expression
const uname = function(name){
  console.log(`my name is ${name}`);
}
uname('bhargavi');
//arrow function
const uName = name => console.log(`my name is ${name}`);
uName('K.Bhargavi')
//function calling another function
const cuttingPieces = function(fruit){
  return fruit*4;
}
const fruitProcessor = function(apples,oranges){
  const applePieces = cuttingPieces(apples);
  const orangePieces = cuttingPieces(oranges)
  const juice = `juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`;
  return console.log(juice);
}
fruitProcessor(3,6);
//coding challenge
const calcAverage = (a,b,c) => (a+b+c)/3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
const checkWinner = function(avgDolphins,avgKoalas){
 if(avgDolphins >= 2* avgKoalas){
   console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`)
 }else if(avgKoalas>= 2*avgDolphins){
   console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`)
 }else{
   console.log(`no team wins....`)
 }
}
checkWinner(scoreDolphins,scoreKoalas);

 //functions having default parameters
 const bookings = [];
 const createBooking = function(flightNum,numPassengers = 1,price = 199 * numPassengers){
   const booking = {flightNum,numPassengers,price};
   console.log(booking);
   bookings.push(booking);
 }
createBooking('LH123', 2, 800);
createBooking('LH123');
createBooking('LH123',4);

const flight = 'LH234';
const jonas ={
  name : 'kaduru bhargavi',
  passport : 2323232323
}
const checkIn = function(fliNum,passenger){
  fliNum = 'LH123';
  passenger.name = 'Ms.' + passenger.name;
  if (passenger.passport === 2323232323) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
}
checkIn(flight, jonas);
 console.log(flight);
 console.log(jonas);
 const newPassport = function(person){
   person.passport = Math.trunc(Math.random()*1000000);
 }
newPassport(jonas);
checkIn(flight,jonas);
*/

/*
//function as a parameter
const oneWord = function(str){
  return str.replace(/ /g,'').toLowerCase();
}
const upperFirstWord = function(str){
  const [first,...other]  = str.split(' ');
  return [first.toUpperCase(),...other].join(' ');
}

const transformed = function(str,fn){
  console.log(`original string: ${str}`);
  console.log(`transformed string : ${fn(str)}`);
  console.log(`transformed by : ${fn.name}`);
}
transformed('Javascript is the best',oneWord);
transformed('Javascrpit is the best', upperFirstWord);
//function returning another function
const greet = function (greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}
const greet1 = greet('hey');
greet1('jonas');
greet1('sarah');
greet('hi!')('williams');
*/
/*
//call, apply ,bind methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({fligh : `${this.iataCode}${flightNum},${name}`})
  }
}
lufthansa.book(239, 'Jonas Schmedtmann');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
book.call(eurowings,23,'sarah williams');
console.log(eurowings);
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
const flightData = [583, 'George Cooper'];
book.apply(lufthansa,flightData);
console.log(lufthansa);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23,'KaduruBhargavi')
//assigning default values
const bookEw23 = book.bind(eurowings ,23);
bookEw23('bhargavi')
*/



//coding challenge
const poll ={
  question : 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
     typeof.answer === 'number' && answer < this.answers.length && this.answers[answer++];
     this.displayResults();
    this.displayResults('string');
  },
  displayResults(type === 'array'){
  if(type === 'array'){
    console.log(this.answers);
  } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
    
  }
}