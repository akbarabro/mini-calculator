#! /usr/bin/env node
import inquirer from "inquirer";
for (let a = 0; a <= 10; a++) {
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
        console.log(`Your answer of ${answer.Firstnumber} + ${answer.Secondnumber} is : ${totalp}`);
    }
    else if (answer.operator === "Subtraction (-)") {
        console.log(`Your answer of ${answer.Firstnumber} - ${answer.Secondnumber} is : ${totals}`);
    }
    else if (answer.operator === "Multiplication (x)") {
        console.log(`Your answer of ${answer.Firstnumber} X ${answer.Secondnumber} is : ${totalm}`);
    }
    else if (answer.operator === "Division (/)") {
        console.log(`Your answer of ${answer.Firstnumber} / ${answer.Secondnumber} is : ${totald}`);
    }
    else {
        console.log("Kindly select the operator");
    }
    const answer2 = await inquirer.prompt([
        {
            message: "Can you want more calculation",
            type: "list",
            name: "chioces",
            choices: ["Yes", "No"],
        },
    ]);
    if (answer2.chioces === "Yes") {
        console.log(answer);
    }
    else {
        console.log("Thanks for use ");
        break;
    }
}
