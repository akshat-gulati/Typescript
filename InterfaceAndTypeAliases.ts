// Define the User interface
interface User {
    name: string;
    email: string;
    password: string;
    gender?: string //optional
}

// Function that takes an object of type User
function getDataOfUser(obj: User) {
    console.log(`Name: ${obj.name}, Email: ${obj.email}`);
}

// Call the function with an object that matches the User interface
getDataOfUser({ name: "Akshat", email: "a@123.com", password: "123" }); 


// ====================================================
// Extending User interface

interface User {
    name: string;
    email: string;
    password: string;
    gender?: string //optional
}

interface Admin extends User{
    admin: boolean

}
function abcd(obj:Admin ) {

}

interface User{
    gender?: string //optional
    phone: number
}
interface User{
    name: string;
    email: string;
    password: string;
    gender?: string //optional
    phone: number
}

//Both Interfaces merge and can be used together


// =========================================================
// Type Aliases


type sankhya = number | string | null

// | -> Union
// 

let ab: sankhya
ab = 12
ab = "Akshat"
ab = null

type user = {
    name: string,
    email: string
}
type admin = user &{
    getDetails(user: string): void
}
function handleAdmin(a: admin){
    a.getDetails
}
// ==========================
// diff btw type interface and Type Aliases

// type abcd = number
// type abcd = string // showing error


// 2. 
// Type Aliases ka kaam h type define krna
// type interface ka kaam ha shape define krna