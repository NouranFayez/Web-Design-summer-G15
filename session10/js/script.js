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


var p = prompt('enter your job')
// if(p == "dev"){
//     var result = "developer" 
//     console.log(result)

// }
//     else {
//         console.log('invalid')

//     }


// eng  ==> engineer    
// doc  ==> doctor   


if (p == null || p == "") {
    alert('please enter your job')
}
else if (p == "dev" || p == "DEV") {
    var result = "developer"
    console.log(result)

}
else if (p == "doc" || p == "dr") console.log('doctor')
else if (p == "eng") console.log('engineer')
else {
    console.log('invalid')

}

// ok ==> ""

if (p == null || p == "") {
    alert("please enter your job")
}
else {
    if (p == "dev" || p == "DEV") {
        var result = "developer"
        console.log(result)

    }
    else if (p == "doc" || p == "dr") console.log('doctor')
    else if (p == "eng") console.log('engineer')
    else {
        console.log('invalid')

    }
}

var degree = prompt("enter your degree")
// cancel , ok (empty string) ==> alert 
// > 100 ==> invalid degree
// > 90  ==> Excellent
// > 80 ==> very good
// > 70 ==> good
// < 70 ==> failed




