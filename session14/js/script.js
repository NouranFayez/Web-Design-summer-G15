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

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("isGraduated"))

let users = [
    {name : "Ahmed" , email : "Ahmed@email.com"},
    {name : "Sara" , email : "sara@email.com"},
    {name : "zein" , email : "zein@email.com"},
]

localStorage.setItem('users' , JSON.stringify(users))

// console.log(JSON.stringify(users))



// console.log(localStorage.getItem('users'))

let usersList = JSON.parse(localStorage.getItem('users'))
usersList.push({name: "Marwa" , email : 'marwa@email.com'})

// console.log(usersList)

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
let nameValidation = (element)=>{
    // console.log(element)
    let inputValue = element.value.trim()
    console.log(inputValue.length)

    if(inputValue.length < 3)  handleError(element , "enter at least 3 character")
    else handleError(element)
}

let handleError= (input , msg = "")=>{
    input.nextElementSibling.innerText = msg
}

let emailValiadtion = (element)=>{
    // https://mailtrap.io/blog/javascript-email-validation/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputValue = element.value
    console.log(emailRegex.test(inputValue));
    (emailRegex.test(inputValue)) ? handleError(element)  
        : handleError(element , "please enter a valid email");

}

let passwordValidation = (element)=>{
    // https://regexr.com/3bfsi
    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    console.log(passwordReg.test(element.value));
    (passwordReg.test(element.value)) 
    ? handleError(element)
    : handleError(element , "enter at leaset 1 lowercase , 1 uppercase , 1 digit , 1 special character")
    
}


let myForm = document.getElementById('myForm')
myForm.addEventListener('input' , (e)=>{
    // console.log(e)
    if(e.target.id == "userName") {
        nameValidation(e.target)
    }
    else if(e.target.id == "userEmail") emailValiadtion(e.target)
    else if(e.target.id == "userPassword") passwordValidation(e.target)
})

 
// name ==> 3 character
// email ==> username@domain.subdomain
// password ==> 1 lowercase , 1 uppercase , 1 number , special character (!@#$%^&*)

