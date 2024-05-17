// numbers

let age:number=600;

// Strings
let names:string="kalyan";

// STring array
let namearr:string[]=["hello","world","stringsonly"]

// String Numbers
let numberArr:number[]=[22,23,26]

// Combination of strings and numbers array
let numberString:(string|number)[]=["hello",23]

// interface of a object and onject

interface Data{
    user:string;
    age:number;
    adress?:string;
}


let  myData:Data={
user:"kalyan",
age:21,
// adress:"hanamkonda"
}


// function
// arguments must said that which data and also we have to write return type tooo
// in below example we have string argument and return type with void  if it returns nothing

function fun(user:string):void{
    // return us
}

fun("kalyan")

// this function returns string so i replaced void with string
// the main point here is the number of arguments always equal to number of parameters
function funs(user:string,age:number):string{
    return user+"age is "+age
}

funs("kalyan",23)

