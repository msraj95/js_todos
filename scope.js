// var, let, and const Variable Declaration in JavaScript
// The differences between var, let, and const variable declaration in JavaScript include:
// Variables declared with var and const are scoped to the immediate function body.
// Variables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in their enclosing scope even before they are declared.
// Variables declared with the let keyword are block-scoped, which means the variables will have scope to the immediate enclosing block.

// Let us now discuss, in detail, how these keywords can make a developer’s code more efficient and how to use each keyword to declare variables in JavaScript programs.

// How to Use the var Keyword in JavaScript
// The var keyword has traditional variable declaration syntax. It is optional to initialize a variable
// with a value if it is declared with the var keyword. If developers do not initialize it with a value, 
// JavaScript will automatically assign undefined to it, as shown in the following code snippet:

var i;  // i is 'undefined'
 
var j = ‘JavaScript’; //initialized with string
 

// var is Function Scoped
// Variables that are declared with var keyword have function scope. 
// Function scoped here means that they can be accessed only inside the function in which they are declared, 
//  as showcased in the following JavaScript code example:

function func() 
{
    var x = 5;
 
    if(1) 
    {
        var y = 10; 
 
        console.log(x); //Output 5
        console.log(y); //Output 10
    }
     
}
 
func();
 
console.log(x); //undefined. Not available outside function
console.log(y); //undefined. Not available outside function

// #Hoisting of var in JavaScript
// Variables declared with the var keyword are subject to hoisting. If we declare a variable (but do not initialize it) at the end of the function,
// the JavaScript runtime will move it to the top of its scope and, therefore, 
// there will be no complaint by the runtime if we use that variable before being declared.

// Issues with var for Variable Declaration
// One of the issues is that the variables declared with the var keyword can be re-declared or updated in the same scope. 
// This could lead to a serious problem if we declare another variable with the same name in the same scope; 
// the new value will replace the old one. Check out the following code-snippet for illustration:

var color =”Red”;
var color= “Green”;
console.log(“color”); // output Green
var color=”Blue”;
console.log(color); // output Blue

// Another issue with the var keyword is that if you declare a variable without the keyword var, then that variable will have global scope.
// To get a better understanding, consider the following code:

for(x = 0; x < array.length; x++){  //index has a global scope
   //code
}
// In the above code snippet, the JavaScript for loop will create variable x in the global scope. If you would 
// create a new variable with the same name x and use it somewhere else in the program, then that new variable’s value will get overwritten.


//  The let Keyword in JavaScript
// let is the improved version of var. let eliminates all the issues of var that we have talked about in the previous section. 
// let has a similar syntax to var but has a more strict scope.

// let is Block Scoped
// The let keyword should be used in situations where you want to declare a variable that should be restricted to the block in which it is restricted.
// Also, variables declared with the let keyword cannot be updated or re-declared.
// Here is an example of how to use let to declare variables in JavaScript: 

function func() 
{
    let x = 10; 
 
    if(x === 10) 
    {
        let y = 20; 
 
        console.log(x); //Output 10
        console.log(y); //Output 20
    }
     
    console.log(x); // Output 10
    console.log(y); // ’undefined'
}
 
func();

// Note that the variable y declared with the let keyword is not accessible beyond the if block in which it is declared. If we would have declared it with the var keyword, then it would have been available, because var has global scope within a function. The following code snippet will help you to better understand this train of thought:

function func() 
{
    console.log(x);     //Output 'undefined'
    console.log(y);     //Error - "Uncaught ReferenceError: y is not defined"
     
    var x = 10;
    let y = 20;
}
 
func();

// Another thing to consider is that let cannot be used before its declaration. If you do so, it will result in a ReferenceError.

// Hoisting of let
// Variables declared with the let keyword are not subject to hoisting. This means you cannot use a variable unless it is declared and initialized.


// The const Keyword in JavaScript
// The const keyword follows the same rules as the let keyword. The only difference with const is that const is used to define only constant values in JavaScript programs.

const myVar = 1000;
 
myVar = 2.5;// Uncaught TypeError: Assignment to constant variable.

// const Declarations are Block Scoped
// The scoping principles of const are the same as that of the let keyword. Like let, the variables declared with the const keyword will also have scope restricted to the block in which they are declared.

// Some important pointers for const include:

// const declares a variable with a constant value.
// Use the const keyword if the variable that you are declaring should not be allowed to be reassigned in the future.
