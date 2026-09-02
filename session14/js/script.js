// var let const

// var ==> reassign / redeclare
// console.log(firstName) // undefined
var firstName = "Nouran"
var firstName = "Sara"
firstName = "zein"


// let ==> reassign
// console.log(lastName)
let lastName = "Ahmed"
// let lastName = "Mohamed"
lastName = "Tamer"

const age = 10
// const age = 20
// age = 30


// var ==> function scope / global scope (window)
// let , const ==> block scope

let test = "text"
function testFunc (){
    console.log(test)
    let address = "maadi"
    if(true){
        console.log(address)
        var x = 20
        let y = 30
    }
    console.log(x)
    console.log(y)
  
}

// testFunc()




// localStorage.setItem("name" , "zein")
// localStorage.setItem("address" , "Maadi")
// localStorage.setItem("age" , "10")

// localStorage.removeItem("age")

console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("isGraduated"))

let users = [
    {name : "Ahmed" , email : "Ahmed@email.com"},
    {name : "Sara" , email : "sara@email.com"},
    {name : "zein" , email : "zein@email.com"},
]

localStorage.setItem('users' , JSON.stringify(users))

// console.log(JSON.stringify(users))



console.log(localStorage.getItem('users'))

let usersList = JSON.parse(localStorage.getItem('users'))
usersList.push({name: "Marwa" , email : 'marwa@email.com'})

console.log(usersList)

localStorage.setItem('users' , JSON.stringify(usersList))


// document.querySelector('.owl-carousel')

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 4 ,
    margin: 30 ,
    nav: true,
    loop:true , 
    navText:[ '<i class="fa-solid fa-arrow-left bg-light p-2 text-primary"></i>' , '<i class="fa-solid fa-arrow-right"></i>']
  });
});

// https://owlcarousel2.github.io/OwlCarousel2/


// <i class="fa-solid fa-arrow-right"></i>


