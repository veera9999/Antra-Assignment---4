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

async function fetchRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    let response = await fetch("https://github.com/bobwen0205");
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
