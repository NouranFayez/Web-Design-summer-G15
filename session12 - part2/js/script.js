// DOM ==> document object model

console.log(document.getElementsByTagName("h2"))

document.getElementsByTagName("h2").testProperty = "web design"

var h2Elements = document.getElementsByTagName('h2') // HTMLCollection ==> special object

h2Elements['h2-element'].innerText = "web design"

h2Elements[1].innerText = "Web Design Summer"

// h2Elements.forEach((item , i)=>{
//     console.log(item)
// })

for(var i = 0 ; i < h2Elements.length ; i++){
    h2Elements[i].innerText = "Web Design Summer NTI"
}

var classElements = document.getElementsByClassName('text-danger')
console.log(classElements)

var h1Element = document.getElementById('h1_ID') // pbject
console.log(h1Element)
h1Element.innerText = "sdfghjkl;lkjh dfghjkl cfghjkl; cfghjkl"

h1Element.style.color = "teal"
h1Element.style.backgroundColor = "lightgray" 


var spanElement = document.querySelector(".bg-light span") // object
console.log(spanElement)

var spanElements = document.querySelectorAll('.bg-light span')
console.log(spanElements)

spanElements.forEach((item)=>{
    item.style.color = "red"
})

var h2ElementsAll = document.querySelectorAll('h2') // ==> Nodelist - forEach

