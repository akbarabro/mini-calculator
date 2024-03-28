#! /usr/bin/env node
import inquirer from "inquirer";
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
if (answer.operator === "Addition (+)") {
    console.log(`Your answer of ${answer.Firstnumber} + ${answer.Secondnumber} is : ${answer.Firstnumber + answer.Secondnumber}`);
}
else if (answer.operator === "Subtraction (-)") {
    console.log(`Your answer of ${answer.Firstnumber} - ${answer.Secondnumber} is : ${answer.Firstnumber - answer.Secondnumber}`);
}
else if (answer.operator === "Multiplication (x)") {
    console.log(`Your answer of ${answer.Firstnumber} X ${answer.Secondnumber} is : ${answer.Firstnumber * answer.Secondnumber}`);
}
else if (answer.operator === "Division (/)") {
    console.log(`Your answer of ${answer.Firstnumber} / ${answer.Secondnumber} is : ${answer.Firstnumber / answer.Secondnumber}`);
}
else {
    console.log("Kindly select the operator");
}
