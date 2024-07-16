// class Calculator {
//   add(a, b) {
//     //instance method
//     return a + b;
//   }
//   subtract(a, b) {
//     //instance method
//     return a - b;
//   }
//   multiply(a, b) {
//     //instance method
//     return a * b;
//   }
//   divide(a, b) {
//     //instance method
//     return a / b;
//   }
//   static Addition(a, b) {
//     //static method
//     return a + b;
//   }
// }

// let c = new Calculator();
// console.log(c.add(5, 6)); //11
// let result = Calculator.Addition(7, 6);
// console.log(result); //13
// console.log(c.Addition(8, 9)); //Type Error

// const API_TOKEN = UkFeF5OCnOkKpeeuCp8OSfJ1BsNil41ismASwpNIJI8pTOcEL18XTBkPfZL6;
// async function getActivity() {
//   try {
//     const response = await fetch("https://api.sportmonks.com/v3/football/");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error : ", error);
//   }
// }

// getActivity();

// async function fetchRepos(username) {
//   const url = `https://api.github.com/users/${username}/repos`;

//   try {
//     let response = await fetch("https://github.com/bobwen0205");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// fetchRepos("veera9999");

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
