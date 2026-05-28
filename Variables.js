const accountId=12345678;//constant
let accountEmail="nitesh@1234gmail.com"//Reduce scope problem 
var accountPassword="1234" // it does'n know about scope
accounntCity="Uttar Pradesh"//
 let accounntState;//undefined
//accountId=2//not allowed 


accountEmail="hc@hc.com";
accountPassword="23456"
accounntCity="Up"
console.log(accountId);

/*
Prefer not to use Var bcoz issue
in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accounntCity,accounntState])