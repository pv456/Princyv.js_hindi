// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Princy",
    "full name": "Princy Verma",
    [mySym]: "mykey1",
    age: 15,
    location: "Mumbai",
    email: "Princy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Princy@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Princy@microsoft.com"
// console.log(JsUser);

JsUser.greetingTwo = function() {
    console.log('Hello Js user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());