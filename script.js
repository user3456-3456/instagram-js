Functions

//STEP 1: Function Declaration
// Recipe
function sayHello() {
  console.log("Hello! 👋");
}


//calling the function
sayHello();
sayHello();
sayHello();



//STEP 2: Function Expression
//re-usable function with parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Amina");
greet("Sam");


//STEP 3: MULITIPLE PARAMETERS
function introduce(name, age) {
  console.log(name + " is " + age + " years old.");
}

introduce("Amina", 20);
// introduce(20, "Amina");   // ❌ what happens? try it!


// //STEP 4: Return VS Console.log

//return: the vending macjhine gives you the drink
function add(a, b) {
  return a + b;     // the drink drops out
}

//console.log  shouts the result to the console
function addShout(a, b) {
  console.log(a + b);   // 📢 just shouts, nothing drops out
}


//return rules
function test() {
  return "done";
  console.log("never runs");   // skipped
}

// console.log = show it. return = give it.
// If you’ll need the answer later, give it.