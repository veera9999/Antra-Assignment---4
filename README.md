![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 4

===================================================================================

## What is the difference between instance methods and static methods?

### Instance Methods:

🎯 Instance methods are defined inside a class and are meant to be accessed by the instances of the class.

🎯 Inside the instance method, **_'this'_** refers to the instance on which the method was called.

🎯 Instance methods can access instance properties via **_this_** .

🎯 Instance methods operate on data specific to an instance.

### Static Methods:

🎯 Static methods are defined with **_static_** keyword inside a class, and are meant to be used and accessed by the class itself, not the instance.

🎯 Inside the instance methods, **_this_** refers to the class itself.

🎯 Static methods cannot dir ectly access instance properties since they are not called on instances.

🎯 Static methods perform operations that are related to the class but are not tied to any particular instance.

```js
class Calculator {
  add(a, b) {
    //instance method
    return a + b;
  }
  subtract(a, b) {
    //instance method
    return a - b;
  }
  multiply(a, b) {
    //instance method
    return a * b;
  }
  divide(a, b) {
    //instance method
    return a / b;
  }
  static Addition(a, b) {
    //static method
    return a + b;
  }
}

let c = new Calculator();
console.log(c.add(5, 6)); //11
let result = Calculator.Addition(7, 6);
console.log(result); //13
console.log(c.Addition(8, 9)); //Type Error
```

## How does Javascript handle concurrency?

Javascript handles concurrency through event loop, asynchronous callbacks, promises and microstask queues.

🎯 **_Event Loop:_** It continously checks the call stack for the functions that need to be executed. If the call stack is empty, then it looks for the event queue for the pending callbacks that needs to be executed.

🎯 **_Asynchronous Callbacks:_** These are functions that are executed aften an asynchronous operation completes and are often used with timers, I/O operations and Https requests.

🎯 **_Promises:_** Promises in javascript are objects taht represents eventual completion or failure of an asynchronous operation

🎯 **_Microtask queues:_** When a promise resolves or rejects, a microtask is scheduled. These microtasks have higher priority and are executes as soon as the current stack frame is cleared.

## What is async/await? How does it differ from using the promise instance methods?

Async/Await is a syntactical feature available in javascript that makes working with promises in a structured manner. It helps in making the code look more synchronous, structured and readable. It makes the code behave synchronous. The **_async_** keyword is used to define a function asynchronous and it returns a promise. The **_await_** keyword is used to make the function wait for the promise to be resolved/rejected. Promises have catch block at the end to handle errors after the promise.then chain which looks a lot like a mess in case of more promise chains. With async/await, you can use traditional try/catch block to handle errors which is easier to understand and maintain the code.

```js
async function fetchRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchRepos("octocat");
```

## Can you use await outside of an async function?

No, we can't use await outside of an async function as await is specifically designed for using within async function to wait for the promises to be resolved/ rejected. if we try to use await outside of async functions, the javascript runtime will throw an error.

## What is callback hell and why is it considered a problem?

### Callback hell:

Callback hell in javascript refers to a situation where callback functions are nested inorder to handle asynchronous operations.

### Why is it considered a Problem?

🎯 It makes it harder and difficult for the dvelopers to read and maintain the code because of it's heavily nested structure.

🎯 The debugging will be harder as every callback in the nested structure should have it's own debugging function.

### Solution:

We can use async/await or promises to avoid callback hell in javascript.

```js
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    callback();
  }, 1500);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 completed");
    callback();
  }, 1300);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("Successfully executed tasks!!");
      });
    });
  });
});
```

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function task1() {
  await delay(2000);
  console.log("Task 1 completed");
}

async function task2() {
  await delay(1000);
  console.log("Task 2 completed");
}

async function task3() {
  await delay(1500);
  console.log("Task 3 completed");
}

async function task4() {
  await delay(1300);
  console.log("Task 4 completed");
}

async function runTasks() {
  await task1();
  await task2();
  await task3();
  await task4();
  console.log("Successfully executed tasks!!");
}

runTasks();
```
