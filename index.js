#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: 'Enter first number', type: 'number', name: 'fristNumber' },
    { message: 'Enter Second number', type: 'number', name: 'LeastNumber' },
    {
        message: 'Select one of the opreators to preform operation',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtration', 'Multiplication', 'Division'],
    },
]);
// conditional statement
if (asnwer.operator === 'Addition') {
    console.log(asnwer.fristNumber + asnwer.LeastNumber);
}
else if (asnwer.operator === 'subtration') {
    console.log(asnwer.fristNumber - asnwer.LeastNumber);
}
else if (asnwer.operator === 'Multiplication') {
    console.log(asnwer.fristNumber * asnwer.LeastNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.fristNumber / asnwer.LeastNumber);
}
else {
    console.log('Plese select valid operator');
}
