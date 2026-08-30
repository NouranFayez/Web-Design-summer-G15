// logical operator ==> && || !

var num = 20
var num2 = 30

// console.log(num < num2) //true
// console.log(num2 > 10) // true
// console.log(num2 == 30) // true
// console.log(typeof num == "number") // true

// console.log(num < num2 && num2 > 10 &&  typeof num == "number" && num2 == 30)
// console.log(num < num2 && num2 > 10 &&  typeof num == "string" && num2 == 30)

// console.log(num == num2 || num2 < 10 ||  typeof num == "string" || num2 == 30)

//  ternary operator ==> (condition/s) ? true : false
// console.log(!(typeof num == "string"))
// console.log(!(num < num2));
// (typeof num == "number") ? console.log('correct') : console.log('wrong');
// (typeof num == "string") ? console.log('correct') : console.log('wrong');

// (num < num2 && num2 > 10 &&  typeof num == "string" && num2 == 30) ? console.log('correct') : console.log('wrong');

// truthy value // falsy value
var test = "lorem"; // true
var test = 0; // false
var test = 52; // true
var test = -0; // false
var test = ""; // false
var test = " "; // true
var test = null; // false
var test; // undefined - false

// (test) ? console.log('correct') : console.log('wrong');
// (!test) ? console.log('correct') : console.log('wrong');

// var age = 10;
// var isGraduated  = (age > 22) ? true : false ;

// console.log(isGraduated)

// if condition 

// if(condition/s){
//     true
// }
// else {
//     false
// }


// var p = prompt('enter your job')
// if(p == "dev"){
//     var result = "developer" 
//     console.log(result)

// }
//     else {
//         console.log('invalid')

//     }


// eng  ==> engineer    
// doc  ==> doctor   


// if (p == null || p == "") {
//     alert('please enter your job')
// }
// else if (p == "dev" || p == "DEV") {
//     var result = "developer"
//     console.log(result)

// }
// else if (p == "doc" || p == "dr") console.log('doctor')
// else if (p == "eng") console.log('engineer')
// else {
//     console.log('invalid')

// }

// ok ==> ""

// if (p == null || p == "") {
//     alert("please enter your job")
// }
// else {
//     if (p == "dev" || p == "DEV") {
//         var result = "developer"
//         console.log(result)

//     }
//     else if (p == "doc" || p == "dr") console.log('doctor')
//     else if (p == "eng") console.log('engineer')
//     else {
//         console.log('invalid')

//     }
// }

// var degree = prompt("enter your degree")
// cancel , ok (empty string) ==> alert 
// > 100 ==> invalid degree
// > 90  ==> Excellent
// > 80 ==> very good
// > 70 ==> good
// < 70 ==> failed



// switch case  ==> === value , data type

// var job = 20
// switch (job) {
//     case "Developer":
//     case "developer"  :   
//         console.log('Developer')
//         break;
//     case "engineer":
//         console.log('engineer')
//         break;
//     case "Accountant":
//         console.log('Accountant')
//         break;
//     case "20" :
//         console.log('test case')   
//        break;  
//     default : console.log('invlid')    

// }


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)


// for(initialization ; condition ; increment/decrement){
//     code
// }

// for(var i = 1 ; i <= 10 ; i++){
 
//     // if(i == 3) console.log('number = 3')
//     if(i == 3) {
//         continue
//     }
//     else if(i == 9) break
//        console.log(i)
// }

// for(var i = 10 ; i >=  0 ; i-=2){
//     console.log(i)
// }



// for(var i = 1 ; i<= 5 ; i++){
//     alert(`number = ${i}`)
// }



// prompt()


// function ==> name 
//              body
//              call
//              parameters
//              return


// function sum(){
//     var n = 20
//     var m = 30
//     console.log(n + m)
// }
// sum()


// function sum(num1  , num2 , num3 = 200){
//     var n = num1
//     var m = num2
//     var result = n + m 

//     // console.log(num3)
//     // return result
//     // return "js"
//     return m+n + num3
// //    return n > m
   
// }
// sum()

// var res = sum(100 , 50 , 70 )

// console.log(res)

// sum()



// function testPrompt(msg){
//     var p = prompt(msg);
    
// }

// var userName = testPrompt('enter your name')
// var userAge = testPrompt('enter your age')
// var userAddress = testPrompt('enter your address')


// function looping ==> startNum , endNum , breakNum , contNum

// looping(1)
// looping(1 , 10)
// looping(1 , 10 , 3)
// looping(1 , 10 , 8 , 3)




////////// function statment 
function funcName(){
    return "Javascript"
}
var t = funcName()
// console.log(t)

///////// function expression
var info = function(){
    return "JS"
}
// console.log(info())

///////// Arrow Function
// var output = (num)=>{
//     return num > 20
// }
var output = (num)=> num > 20



// console.log(output(30))



///////// Array

// var userName = "Zein"
// var userAge = 20
// var userAddress = "Maadi"
// var isUserGraduated = false
// var userNationality = "Egyptian"

var userInfo = ["Zein" , 20 , "Maadi" , false , "Egyptian"]

console.log(userInfo[2]) // get item

userInfo[5] = "student"
console.log(userInfo.length)

userInfo[userInfo.length] = "fghjk"


userInfo[1] = 21

////////////////// Methods of array

userInfo.push("Nasr city" , "010000000" )
userInfo.unshift("web design")
userInfo.shift()
userInfo.pop()

// splice(index , deletedCount , item/s) ==> add / remove elements

userInfo.splice(6 , 1)
userInfo.splice(3 , 0 , "october" , true)
userInfo.splice(7 , 1 , 'Developer')

console.log(userInfo)
console.log(userInfo.includes("Maadi"))
console.log(userInfo.includes("new cairo"))

console.log(userInfo.indexOf("Egyptian"))
console.log(userInfo.toString())


// console.log(userInfo[0])
// console.log(userInfo[1])
// console.log(userInfo[2])
// console.log(userInfo[3])
// console.log(userInfo[4])
// console.log(userInfo[5])
// console.log(userInfo[6])
// console.log(userInfo[7])
// console.log(userInfo[8])
// index ==> 0: 8
// length ==> 9
console.log("---------------------------")

for(var i = 0 ; i < userInfo.length ; i++ ){
    console.log(userInfo[i])
}
console.log("---------------------------")

userInfo.forEach((element , index , arr)=>{
    console.log(`index = ${index} , element = ${element}`)
    console.log(arr)
    // console.log('js')
})

// ()=>{

// }


var  courses = ["html" , "css" , "js"]



