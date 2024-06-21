#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let text = (chalk.italic.yellow("quiz-challenge"))
console.log(text.padStart(58));

let score = 0;

let answer = await inquirer.prompt([
    {
      name: "Name",
      type: "input",
      message: "Enter your name :",
      validate: (value) => {
        if (value.trim() === "") {
          return "FILL OUT THIS FIELD";
        }
        return true;
      },
},
  {
    name :"q1",
    type :"list",
    message:"Which of the following is the correct way to cast a variable in TypeScript?",
    choices:
    ["a. let str = <string>someValue",
     "b. let str = (string)someValue",
     "c. let str = string(someValue);",
     "d. let str = as string(someValue)"]
}])

switch(answer.q1){
    case "a. let str = <string>someValue":
    console.log(chalk.green("correct answer"))
    score ++
    break
    default:
    console.log(chalk.red("wrong answer"))
}
let select = await inquirer.prompt([{
    name: "q2",
    type:"list",
    message :"What is the main advantage of using TypeScript over JavaScript?",
    choices :[ 
        "a. TypeScript is faster than JavaScript.",
        "b. TypeScript can be executed directly by the browser.",
        "c.TypeScript provides static type-checking.",
        "d. TypeScript has more libraries than JavaScript."]
}])
switch(select.q2){
    case "c.TypeScript provides static type-checking.":
    console.log(chalk.green("correct answer"))
    score ++
    break;
    default:
    console.log(chalk.red("wrong answer"))
}
let select3 = await inquirer.prompt([{
    name:"q3",
    type:"list",
    message:"Which of the following is NOT a valid way to define a function in TypeScript?",
    choices:[
    "a. function add(a: number, b: number): number { return a + b; }",
    "b. const add = (a: number, b: number): number => a + b;",
    "c. let add: (a: number, b: number) => number = function(a, b) { return a + b; };",
    "d. function add(a: number, b): number { return a + b; }"]
}])
switch(select3.q3){
    case "d. function add(a: number, b): number { return a + b; }":
    console.log(chalk.green("correct answer"))
    score ++
    break;
    default:
    console.log(chalk.red("wrong answer"))
}
let select4 = await inquirer.prompt([{
    name:"q4",
    type:"list",
    message:"Which of the following keywords is used to inherit a class in TypeScript?",
    choices:[
        "a. implements",
        "b. extends",
        "c. inherits",
        "d. interface"]
}])
switch(select4.q4){
    case "b. extends":
    console.log(chalk.green("correct answer"))
    score ++
    break;
    default:
    console.log(chalk.red("wrong answer"))
}
let select5 = await inquirer.prompt([{
    name:"q5",
    type:"list",
    message:"How can you define a tuple in TypeScript?",
    choices:[
    "a. let myTuple: [number, string]",
    "b. let myTuple = [number, string]",
    "c. let myTuple: (number, string)",
    "d. let myTuple = (number, string)"]
}])

switch(select5.q5){
    case "a. let myTuple: [number, string]":
    console.log(chalk.green("correct answer"))
    score ++
    break;
    default:
    console.log(chalk.red("wrong answer"))

}
console.log(chalk.italic.yellow(`${answer.Name} YOUR TOTAL SCORE IS  ${score} OUT OF 5`))






