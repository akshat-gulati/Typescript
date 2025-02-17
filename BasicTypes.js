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
var mixedArray = [1, 2, 3, 4, 5, "John", { name: "example" }];
var numberArray = [1, 2, 3, 4, 5];
// Tuple declaration
var userTuple = ["Alice", 30];
// Enumerations: kind of key-value pair
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["GUEST"] = "guest";
    UserRole["SUPERADMIN"] = "super admin";
})(UserRole || (UserRole = {}));
console.log(UserRole.ADMIN);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "status code 500";
    StatusCodes["NOTFOUND"] = "status code 404";
})(StatusCodes || (StatusCodes = {}));
var anotherNum = 12;
// ========================================================================
// TypeScript types: Any, Unknown, Void, Null, Undefined, Never
// 'any' type
var anyDataType; // Initially 'any', but if initialized, it gets a specific type
anyDataType = 12;
anyDataType = "John";
console.log(anyDataType.toUpperCase()); // No type checking
console.log('====================================');
console.log(anyDataType);
console.log('====================================');
// 'unknown' type
var unknownDataType;
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
function logMessage() {
    console.log("Hello, John Doe");
}
// Function with 'string' return type
function getMessage() {
    return "Hello, John Doe";
}
var nullDataType = null;
var nullDataType2; //this can either be null or a string
// undefined--------------------
// never------------------------------------------------- This never returns anything
function fn2never() {
    while (true) { }
}
fn2never();
console.log('====================================');
console.log("hey");
console.log('====================================');
//Type Inference: When type is defined in this way
var newnum = 12;
// Type annotations: type defining
var newnum2;
var newnum3;
function newfn(a, b) {
    return a > 0 && b.length > 0;
}
