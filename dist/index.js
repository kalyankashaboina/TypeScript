"use strict";
// numbers
let age = 600;
// Strings
let names = "kalyan";
// STring array
let namearr = ["hello", "world", "stringsonly"];
// String Numbers
let numberArr = [22, 23, 26];
// Combination of strings and numbers array
let numberString = ["hello", 23];
let myData = {
    user: "kalyan",
    age: 21,
    // adress:"hanamkonda"
};
// function
// arguments must said that which data and also we have to write return type tooo
// in below example we have string argument and return type with void  if it returns nothing
function fun(user) {
    // return us
}
fun("kalyan");
// this function returns string so i replaced void with string
// the main point here is the number of arguments always equal to number of parameters
function funs(user, age) {
    return user + "age is " + age;
}
funs("kalyan", 23);
let dd = [10, 20, 30];
let cc = dd.map(num => num * 2);
console.log(cc);


//------------------------------------------------------ Tuples------------------------
// to define the tuples ,specify the types of its elemnts in the correct order
let tuple = ["kalyan", 20];
// to acces tuples
console.log(tuple[0]);
console.log(tuple[1]);
// you can modify the tiples
tuple[0] = "world";
tuple[1] = 30;
// optional
// both are correct
let tuplet;
tuplet = ["kalyan"];
tuplet = ["hari", 20];
let AliasTuple = ["aliasTuple", 200];
// array or rest tuples
let ArrTuples;
ArrTuples = ["hello", 203, 204];
// Tuple FUNCTIONS
// return type
function TupleFun() {
    return ["kalyan", 30];
}
const [named, ages] = TupleFun();
console.log(named, ages);
// parametertype
function paraTuple(person) {
    console.log(`name is ${person[0]} and age is ${person[1]}`);
}
paraTuple(["king", 30]);
