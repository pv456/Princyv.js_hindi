// singleton
// object.create

// object literals
const JsUser = {
    name: "Princy",
    "Full name": "Princy Verma",
    age: 15,
    location: "Mumbai",
    email: "Princy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);