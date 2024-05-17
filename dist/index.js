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
