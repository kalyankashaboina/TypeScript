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


let dd:number[]=[10,20,30]
let cc:number[]=dd.map(num=>num*2)
console.log(cc)


//------------------------------------------------------ Tuples------------------------

// to define the tuples ,specify the types of its elemnts in the correct order
let tuple:[string,number]=["kalyan",20]

// to acces tuples
console.log(tuple[0])
console.log(tuple[1])

// you can modify the tiples

tuple[0]="world"
tuple[1]=30

// optional
// both are correct

let tuplet:[string,number?]
tuplet=["kalyan"]
tuplet=["hari",20]

// Tuple alias
type tuplemode=[string,number]

let AliasTuple:tuplemode=["aliasTuple",200]


// array or rest tuples

let ArrTuples:[string,...number[]]
ArrTuples=["hello",203,204]

// Tuple FUNCTIONS

// return type
function TupleFun():[string,number]{
    return["kalyan",30]
}
const[named,ages]=TupleFun();
console.log(named,ages)

// parametertype
function paraTuple(person:[string,number]){
    console.log(`name is ${person[0]} and age is ${person[1]}`)
}
paraTuple(["king",30])






















