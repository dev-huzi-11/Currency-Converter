#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    PKR: 280,
    INR: 74.57
}

const user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Slect from currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "PKR", "INR"]
        },
        {
            name: "to", 
            message: "Select to currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "PKR", "INR"]
        },
        {
            name: "amount",
            type: "number",
            message: "Enter your amount"
        }
    ]
)

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let enterAmount = user_answer.amount;
let baseAmount = enterAmount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);


