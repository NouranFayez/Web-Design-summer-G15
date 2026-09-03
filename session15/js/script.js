

let date = new Date()

// console.log(date)

// console.log(date.getFullYear())
// console.log(date.getDay()) // 0 - 6 sunday
let weekDays = ["sunday" , "monday" , "tuesday" , "wednsday" , "thursday" ,"friday" , "saturday"]

// console.log(weekDays[date.getDay()])

// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleDateString("ar-EG" , {
//     weekday: "long",
//     month:"long",
//     year:"numeric"
// }))
// console.log(date.toLocaleDateString("en-US" , {
//     weekday: "long",
//     month:"long",
//     year:"numeric"
// }))
// console.log(date.toLocaleDateString("en-US" , {
//     weekday: "short",
//     month:"short",
//     year:"numeric"
// }))
// console.log(date.toLocaleDateString("en-US" , {
//     weekday: "short",
//     month:"numeric",
//     year:"numeric"
// }))

// console.log(date.setFullYear(2030))

// console.log(date)



//// destructuring 

let nums = [10 , 20 , 30]

// let num1 = nums[0]
// let num2 = nums[1]
// let num3 = nums[2]

// let [num1 , num2 , num3 ] = nums
// let [num1 , num2 , num3 , num4 = 200 ] = nums

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)


// let [num1 , , num3 ] = nums
// console.log(num1)
// console.log(num3)


let object = {
    name : "marwa",
    age : 40,
    address : "October",
    phone : "010000000"
}

// let name = object.name
// let age = object.age
// let address = object.address

// let {age , name , address , phone} = object

// console.log(name)
// console.log(age)
// console.log(address)

// let {name : userName , age : userAge } = object

// console.log(userName)


////// spread operator

let arr1 = [1 , 2 , 3]
let arr2 = [4, 5,6]
// let arr3 = [arr1[0] , arr1[1] , arr1[2]]
let arr3 = [...arr1 , ...arr2]

console.log(arr3)

let obj = {
    name : "Marwa",
    email : "marwa@email.com",
    age : 30
}

// let user ={
//     address : "October",
//     name : obj.name,
//     age : obj.age,
//     email : obj.email,

// }

let user = {
    ...obj,
    address : "Maadi"
}
console.log(user)
let userInfo = {
    ...obj,
    name : "Sara"
}

console.log(userInfo)
