#! /usr/bin/env node
//Importing Inquirer and Chalk pakages:
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colourfull Welcome message:
console.log("=".repeat(60));
console.log(chalk.bold.cyanBright("\n \tWelcome To Rimsha Coding - Word Counter\n"));
console.log("=".repeat(60));
// Prompt the user to Enter a Sentence:
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//Training the sentence and splitting it into words based on "spaces":
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence:
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.yellow(words.length)} `));
console.log("=".repeat(60));
