// Terminal command to watch TypeScript files
// terminal: tsc --watch

// Variable declarations
var num = 12;
var userName = "John";

// Function declaration
function greet() {
    console.log("Hello, World!");
}

// Array declarations
let mixedArray = [1, 2, 3, 4, 5, "John", { name: "example" }];
let numberArray: number[] = [1, 2, 3, 4, 5];

// Tuple declaration
let userTuple: [string, number] = ["Alice", 30];

// Enumerations: kind of key-value pair
enum UserRole {
    ADMIN = "admin",
    GUEST = "guest",
    SUPERADMIN = "super admin"
}

console.log(UserRole.ADMIN);

enum StatusCodes {
    ABANDONED = "status code 500",
    NOTFOUND = "status code 404"
}

let anotherNum = 12;

// ========================================================================

// TypeScript types: Any, Unknown, Void, Null, Undefined, Never

// 'any' type
let anyDataType: any; // Initially 'any', but if initialized, it gets a specific type
anyDataType = 12;
anyDataType = "John";
console.log(anyDataType.toUpperCase()); // No type checking

console.log('====================================');
console.log(anyDataType);
console.log('====================================');

// 'unknown' type
let unknownDataType: unknown;
unknownDataType = 12;
unknownDataType = "John";

if (typeof unknownDataType === 'string') {
    console.log(unknownDataType.toUpperCase()); // Type narrowing
}

// Explanation of 'any' and 'unknown'
/*
 * 'any': When you use 'any', you're essentially opting out of type checking.
 * This means you can perform any operation on a value of type 'any' without the TypeScript compiler throwing an error.
 * However, this also means you lose all type safety, which can lead to runtime errors if you're not careful.
 *
 * 'unknown': On the other hand, 'unknown' is a safer alternative to 'any'.
 * While you can assign any value to a variable of type 'unknown', you cannot perform operations on it without first performing some type checking.
 * This ensures that you handle the value appropriately based on its actual type, maintaining type safety.
 */

// Function with 'void' return type
function logMessage(): void {
    console.log("Hello, John Doe");
}

// Function with 'string' return type
function getMessage(): string {
    return "Hello, John Doe";
}

let nullDataType = null
let nullDataType2: string | null; //this can either be null or a string


// undefined--------------------


// never------------------------------------------------- This never returns anything

function fn2never() {
    while (true) { }
    
}
fn2never()
console.log('====================================');
console.log("hey");
console.log('====================================');

//Type Inference: When type is defined in this way
let newnum = 12

// Type annotations: type defining
let newnum2: number
let newnum3: number | boolean | string
function newfn(a: number, b: string): boolean { //This fn will accept a number and string and return in boolean
    return a > 0 && b.length > 0;
}


