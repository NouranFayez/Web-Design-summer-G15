var nums = [2 , 10 , 50 , 5 , 20]

nums.forEach((item , i , arr)=>{
    if(item > 10){
        // console.log(item)
        // console.log(i)
    } 
})

// nums.find((item)=>{
//     return item > 10
// })
// console.log(nums.find((item)=> item > 10))
// find , findIndex , filter ==> (> >= < <= == === != !==)
var num = nums.find((item)=> item > 100) // undefined
var num = nums.find((item)=> item > 10)
var index = nums.findIndex((item)=> item > 100) // -1
var index = nums.findIndex((item)=> item > 10)

var newArray = nums.filter(num => num > 5)
var newArray = nums.filter(num => num > 100)

var mapArray = nums.map(num => num*2)
// console.log(nums)
// console.log(mapArray)


// slice , concate , join , sort , reverse , reduce ==> search



// var user = ['zein' , 'tamer' , 30 , 'maadi' , 'nasr city' , true]



var lastName = "Mazen"
var user = {
    firstName : "zein" ,
    lastName : "tamer" ,
    age : 30 ,
    isGraduated : true,
    fullName : function(){
        // this ==> object (user)
        return `${this.firstName} ${this.lastName}`
    },
    testFunc : ()=>{
        // this ==> window
        return this.lastName
    } , 
    phoneList : ()=>{
        return {
            homePhone : "01000000",
            officePhone : "012222222",
            test : function(){
                return [10 , 50 ,4]
            }
        }
    }
}
console.log(user.phoneList())
console.log(user.phoneList().officePhone)
console.log(user.phoneList().test())
console.log(user.phoneList().test()[1])
// console.log(user.age)
user.homeAddress = "Maadi"
user['age'] = 25
console.log(user)
console.log(user.fullName())
console.log(user.testFunc()) // mazen


//   var fullName =  function(){
//     return "Zein tamer"
//     }