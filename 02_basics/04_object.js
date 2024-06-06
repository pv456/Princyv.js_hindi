// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nitin"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Princy",
            lastname: "Verma"
        }
    }
}
 
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = 