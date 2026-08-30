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


function sum(num1  , num2 , num3 = 200){
    var n = num1
    var m = num2
    var result = n + m 

    // console.log(num3)
    // return result
    // return "js"
    return m+n + num3
//    return n > m
   
}
// sum()

// var res = sum(100 , 50 , 70 )

// console.log(res)

// sum()



function test(msg){
    var p = prompt(msg);
    return p
}

var userName = test("enter your name")
var userAge = test('enter your age')
var userAddress = test('enter your address')