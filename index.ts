#! /usr/bin/env node
import inquirer from "inquirer";
// let calculation = async ()=>{
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "Firstnumber" },
  { message: "Enter second number", type: "number", name: "Secondnumber" },
  {
    message: "Select operator to perform act",
    type: "list",
    name: "operator",
    choices: [
      "Addition (+)",
      "Subtraction (-)",
      "Multiplication (x)",
      "Division (/)",
    ],
  },
]);
console.log(answer);
let totalp = answer.Firstnumber + answer.Secondnumber;
let totals = answer.Firstnumber - answer.Secondnumber;
let totalm = answer.Firstnumber * answer.Secondnumber;
let totald = answer.Firstnumber / answer.Secondnumber;

if (answer.operator === "Addition (+)") {
  console.log(
    `Your answer of ${answer.Firstnumber} + ${answer.Secondnumber} is : ${totalp}`
  );
} else if (answer.operator === "Subtraction (-)") {
  console.log(
    `Your answer of ${answer.Firstnumber} - ${answer.Secondnumber} is : ${totals}`
  );
} else if (answer.operator === "Multiplication (x)") {
  console.log(
    `Your answer of ${answer.Firstnumber} X ${answer.Secondnumber} is : ${totalm}`
  );
} else if (answer.operator === "Division (/)") {
  console.log(
    `Your answer of ${answer.Firstnumber} / ${answer.Secondnumber} is : ${totald}`
  );
} else {
  console.log("Kindly select the operator");
}

let calculation1 = async () => {};
if (answer) {
  const answer2 = await inquirer.prompt([
    {
      message: "Can you want more calculation",
      type: "list",
      name: "chioces",
      choices: ["Yes", "No"],
    },
  ]);
  if (answer2.chioces === "Yes") {
    const answer = await inquirer.prompt([
      { message: "Enter first number", type: "number", name: "Firstnumber" },
      { message: "Enter second number", type: "number", name: "Secondnumber" },
      {
        message: "Select operator to perform act",
        type: "list",
        name: "operator",
        choices: [
          "Addition (+)",
          "Subtraction (-)",
          "Multiplication (x)",
          "Division (/)",
        ],
      },
    ]);
    console.log(answer);
    let totalp = answer.Firstnumber + answer.Secondnumber;
    let totals = answer.Firstnumber - answer.Secondnumber;
    let totalm = answer.Firstnumber * answer.Secondnumber;
    let totald = answer.Firstnumber / answer.Secondnumber;

    if (answer.operator === "Addition (+)") {
      console.log(
        `Your answer of ${answer.Firstnumber} + ${answer.Secondnumber} is : ${totalp}`
      );
    } else if (answer.operator === "Subtraction (-)") {
      console.log(
        `Your answer of ${answer.Firstnumber} - ${answer.Secondnumber} is : ${totals}`
      );
    } else if (answer.operator === "Multiplication (x)") {
      console.log(
        `Your answer of ${answer.Firstnumber} X ${answer.Secondnumber} is : ${totalm}`
      );
    } else if (answer.operator === "Division (/)") {
      console.log(
        `Your answer of ${answer.Firstnumber} / ${answer.Secondnumber} is : ${totald}`
      );
    } else {
      console.log("Kindly select the operator");
    }
  } else if (answer2.chioces === "No") {
    console.log("thanks for using mini calculator");
  }
}

let calculation3 = async () => {};
if (answer) {
  const answer3 = await inquirer.prompt([
    {
      message: "Can you want more calculation",
      type: "list",
      name: "chioces",
      choices: ["Yes", "No"],
    },
  ]);
  if (answer3.chioces === "Yes") {
    const answer = await inquirer.prompt([
      { message: "Enter first number", type: "number", name: "Firstnumber" },
      { message: "Enter second number", type: "number", name: "Secondnumber" },
      {
        message: "Select operator to perform act",
        type: "list",
        name: "operator",
        choices: [
          "Addition (+)",
          "Subtraction (-)",
          "Multiplication (x)",
          "Division (/)",
        ],
      },
    ]);
    console.log(answer);
    let totalp = answer.Firstnumber + answer.Secondnumber;
    let totals = answer.Firstnumber - answer.Secondnumber;
    let totalm = answer.Firstnumber * answer.Secondnumber;
    let totald = answer.Firstnumber / answer.Secondnumber;

    if (answer.operator === "Addition (+)") {
      console.log(
        `Your answer of ${answer.Firstnumber} + ${answer.Secondnumber} is : ${totalp}`
      );
    } else if (answer.operator === "Subtraction (-)") {
      console.log(
        `Your answer of ${answer.Firstnumber} - ${answer.Secondnumber} is : ${totals}`
      );
    } else if (answer.operator === "Multiplication (x)") {
      console.log(
        `Your answer of ${answer.Firstnumber} X ${answer.Secondnumber} is : ${totalm}`
      );
    } else if (answer.operator === "Division (/)") {
      console.log(
        `Your answer of ${answer.Firstnumber} / ${answer.Secondnumber} is : ${totald}`
      );
    } else {
      console.log("Kindly select the operator");
    }
  } else if (answer3.chioces === "No") {
    console.log("thanks for using mini calculator");
  }
}

let calculation4 = async () => {};
if (answer) {
  const answer = await inquirer.prompt([
    {
      message: "Can you want more calculation",
      type: "list",
      name: "chioces",
      choices: ["Yes", "No"],
    },
  ]);
  if (answer.chioces === "Yes") {
    console.log("bas karde bhai or kitna calculate karega ");
  }
}
if (answer.chioces === "no") {
  console.log(
    "thanks bhai, kafi coding karli ab koi or mini project banata hon"
  );
}
