

if (document.querySelector('#h1_ID')) {
    var h1Element = document.querySelector('#h1_ID')

    h1Element.style.color = "blue"
    h1Element.classList.add('card')
    // h1Element.classList.remove('border')
    h1Element.classList.toggle('border')

}



var changeDiv = () => {
    var divElement = document.getElementById('div_ID')
    console.log(divElement)
    divElement.classList.add("card")
}

var mouseEnterEvent = (element) => {
    //  var divElement = document.getElementById('div_ID')
    // console.log(divElement)
    element.classList.add("card")
}


var userNameInput = document.getElementById('userName')
userNameInput.addEventListener('input', (e) => {
    // console.log('typing')
    // console.log(userNameInput.value)
    // console.log(e)
    // userNameInput.nextElementSibling.innerText = userNameInput.value
    e.target.nextElementSibling.innerText = userNameInput.value
})

var myForm = document.querySelector('#myForm')
var users = []
myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    // console.log('submit')
    console.log(e.target.elements.userEmail.value)
    console.log(e.target.elements.userName.value)
    var user = {
        userName: e.target.elements.userName.value,
        userEmail: e.target.elements.userEmail.value,
    }
    users.push(user)
    console.table(users)
})



//   <div class="alert alert-primary">
//                 <h4>Name : Nouran</h4>
//                 <h4>email : nouran@email.com</h4>
//             </div>

var div = document.createElement('div')
var h3 = document.createElement('h3')
var h4 = document.createElement('h4')

h3.innerText = "Nouran"
h4.innerText = "Nouran@dfghj"

div.appendChild(h3)
div.appendChild(h4)

div.classList.add('alert', 'alert-primary')
var divContainer = document.getElementById('divContainer')
divContainer.appendChild(div)

console.log(div)
console.log(h3)
console.log(h4)


var setTime = setTimeout(() => {
    console.log('javascript')
}, 3000)


var i = 0
var counter = document.querySelector('.counter')
var setInt = setInterval(() => {

    counter.innerText = i
    if (i == 100) clearInterval(setInt)
    i++

}, 100)

console.log(setTime)
console.log(setInt)


var btn = document.getElementById('changeImg')
btn.addEventListener('click', (e) => {
    console.log(e.target.previousElementSibling.src)
    console.log(btn.previousElementSibling)
    // file:///C:/Users/Nouran%20Ahmed/Desktop/Web-design-summer-G15/session12/images/1.jpg
    btn.previousElementSibling.src = "images/2.jpg"
})


var scrollDiv = document.getElementById('scrollDiv')
scrollDiv.addEventListener('scroll', (e) => {
    console.log('scrolling')
    console.log(e.target.scrollTop);
        (e.target.scrollTop > 300)
        ? scrollDiv.classList.add('bg-primary-subtle')
        : scrollDiv.classList.remove('bg-primary-subtle')
})

// window.prompt('fghj')
var upArrow = document.querySelector('#up-arrow')
window.addEventListener('scroll' , ()=>{
    console.log(window.scrollY) ;
    (window.scrollY > 600 ) ? upArrow.classList.remove("d-none") 
    : upArrow.classList.add('d-none')
})

