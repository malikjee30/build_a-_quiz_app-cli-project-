#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("\n \t \t##### Welcome to Daily quiz #####"));
console.log(chalk.italic.yellow("\n \t \t====> Each Question is of 10 Marks <====\n "));

let marks: number = 0;
let userInput = await inquirer.prompt([
    {
        type: 'list',
        name: 'question1',
        message: "1.which is the capital city of Pakistan?",
        choices:["Lahore","Larkana", "Islamabad", "Karachi"]
    },
    {
        type: 'list',
        name: 'question2',
        message: "2.what is the official language of Pakistan?",
        choices:["Punjabi","Sindhi", "Pashto", "Urdu"]
    },
    {
        type: 'list',
        name: 'question3',
        message: "3.what is the significance of the indus River in Pakistan?",
        choices:["Largest River","Irrigation and Power", "shortest River", "one province"]
    },
    {
        type: 'list',
        name: 'question4',
        message: "4.what is the national sport of Pakistan?",
        choices:["Cricket","Football", "Field Hockey", "Squash"]
    },
    {
        type: 'list',
        name: 'question5',
        message: "5.Which of the following is a popular tourist destination in Pakistan",
        choices:["Grand Canyon","Eiffel Tower", "Hunza Velly", "Great Wall of China"]
    }

]);
const {question1, question2, question3, question4, question5} = userInput
// this is called destructuring

let correctOptions = ["Islamabad", "Urdu", "Irrigation and Power", "Field Hockey", "Hunza Velly"];

if(question1 === "Islamabad") marks += 10;
if(question2 === "Urdu") marks += 10;
if(question3 === "Irrigation and Power") marks += 10;
if(question4 === "Field Hockey") marks += 10;
if(question5 === "Hunza Velly") marks += 10;

console.log(marks);

function myAnswers(){
    console.log(`\n correct Options:`, correctOptions);
    if(marks == 50){
        console.log(`\n Congratulation! You got full ${marks} marks`);
    }else if(marks > 0){
        console.log(`\n You got ${marks} marks, out of 50`);
    }else{
        console.log(`\n Unfortunately! You got ${marks} marks out of 50`);
        
    }
}
myAnswers();

