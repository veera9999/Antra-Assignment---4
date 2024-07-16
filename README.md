![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 3

===========================================================================================

## What is the difference between instance methods and static methods?

### Instance Methods:

🎯 Instance methods are defined inside a class and are meant to be accessed by the instances of the class.

🎯 Inside the instance method, **_'this'_** refers to the instance on which the method was called.

🎯 Instance methods can access instance properties via **_this_** .

🎯 Instance methods operate on data specific to an instance.

### Static Methods:

🎯 Static methods are defined with **_static_** keyword inside a class, and are meant to be used and accessed by the class itself, not the instance.

🎯 Inside the instance methods, **_this_** refers to the class itself.

🎯 Static methods cannot directly access instance properties since they are not called on instances.

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

Async/Await is a syntactical feature available in javascript that makes working with promises in a structured manner. It helps in making the code look more synchronous, structured and readable. It makes the code behave synchronous. The **_async_** keyword is used to define a function asynchronous and it returns a promise. The **_await_** keyword is used to make the function wait for the promise to be resolved/rejected.

```js
async function getActivity() {
  try {
    const response = await fetch("https://www.boredapi.com/api/activity");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error : ", error);
  }
}

getActivity();
```
