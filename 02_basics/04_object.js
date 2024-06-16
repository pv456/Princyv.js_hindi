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
 
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:  "a", 2:  "b"}
const obj2 = {3: "a",  4:  "b"}
const obj4 = {5: "a",  6:  "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "p@gamil.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

user[1]. email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('islogged'));


const course = {
    course:  "js in hindi",
    price: "999",
    courseInstructor: "Princy"
}

// course.courseInstructor 

const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Princy"
//     "coursename": "js in hindi"
//     "prize": "free"
// }

[
    {},
    {},
    {},
]

