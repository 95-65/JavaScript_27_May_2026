//Data type 
//1) Primitive data type 
//2)Non Primitive Data Type 

//1) Primitive data type
//7 types :String,Number,Boolean,null,undefined,symbol,BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;


const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)

//const bigNumber=145554842115445154415n

//JavaScript is Dynamically Typed Language

//2)Non Primitive Data Type (ref type)

//Arrays,Objects,Functions


//Array
const heros=["shaktiman","naagraj","doga"]

//Objects
let myObj={
    name:"nitesh",
    age: 23
   
}

//Function
const myFunction=function ()
{
    console.log("hello World")
}

console.log(typeof bigNumber)//bigint
console.log(typeof outsideTemp)//null=object 
console.log(typeof scoreValue)//Number 
console.log(typeof myFunction)//Function
console.log(typeof myObj)//Object 
console.log(typeof heros)//Object