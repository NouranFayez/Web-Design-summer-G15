var nums = [2, 10, 50, 5, 20]

nums.forEach((item, i, arr) => {
    if (item > 10) {
        // console.log(item)
        // console.log(i)
    }
})

// nums.find((item)=>{
//     return item > 10
// })
// console.log(nums.find((item)=> item > 10))
// find , findIndex , filter ==> (> >= < <= == === != !==)
var num = nums.find((item) => item > 100) // undefined
var num = nums.find((item) => item > 10)
var index = nums.findIndex((item) => item > 100) // -1
var index = nums.findIndex((item) => item > 10)

var newArray = nums.filter(num => num > 5)
var newArray = nums.filter(num => num > 100)

var mapArray = nums.map(num => num * 2)
// console.log(nums)
// console.log(mapArray)


// slice , concate , join , sort , reverse , reduce ==> search



// var user = ['zein' , 'tamer' , 30 , 'maadi' , 'nasr city' , true]



var lastName = "Mazen"
var user = {
    firstName: "zein",
    lastName: "tamer",
    age: 30,
    isGraduated: true,
    fullName: function () {
        // this ==> object (user)
        return `${this.firstName} ${this.lastName}`
    },
    testFunc: () => {
        // this ==> window
        return this.lastName
    },
    phoneList: () => {
        return {
            homePhone: "01000000",
            officePhone: "012222222",
            test: function () {
                return [10, 50, 4]
            }
        }
    }
}
// console.log(user.phoneList())
// console.log(user.phoneList().officePhone)
// console.log(user.phoneList().test())
// console.log(user.phoneList().test()[1])
// console.log(user.age)
user.homeAddress = "Maadi"
user['age'] = 25
// console.log(user)
// console.log(user.fullName())
// console.log(user.testFunc()) // mazen


//   var fullName =  function(){
//     return "Zein tamer"
//     }



var userInfo = {
    name: "Marwa",
    age: 40,
    address: "October"
}

var userInfo2 = {
    name: "zein",
    age: 20,
    address: "Maadi"
}

var userInfo3 = {
    name: "tamer",
    age: 10,
    address: "Nasr city"
}


// Array of objects
var users = [{
    name: "Marwa",
    age: 40,
    address: "October"
},
{
    name: "zein",
    age: 10,
    address: "Nasr city"
},
{
    name: "tamer",
    age: 30,
    address: "Nasr city"
}
]

console.log(users)

users.forEach((item)=>{
    // console.log(item)
})

var element = users.find((item)=> item.age == 10)
var index = users.findIndex((item)=> item.age == 10)
console.log(element)
console.log(index)

users[index].address = "new cairo"

console.table(users)


var usersList = []
function addUser (){
    usersList.push()
}




