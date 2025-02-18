// Function that takes an object of type User
function getDataOfUser(obj) {
    console.log("Name: ".concat(obj.name, ", Email: ").concat(obj.email));
}
// Call the function with an object that matches the User interface
getDataOfUser({ name: "Akshat", email: "a@123.com", password: "123", phone: 1234567890 });
function abcd(obj) {
}
// | -> Union
// 
var ab;
ab = 12;
ab = "Akshat";
ab = null;
function handleAdmin(a) {
    a.getDetails;
}
// ==========================
// diff btw type interface and Type Aliases
// type abcd = number
// type abcd = string // showing error
// 2. 
// Type Aliases ka kaam h type define krna
// type interface ka kaam ha shape define krna
