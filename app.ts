// currency convertor using typescript
import inquirer from "inquirer";
const convertion = {
  PKR: {
    USD: 1.25,
    EUR: 1.05,
    INR: 0.013,
  },
  USD: {
    PKR: 0.8,
    EUR: 0.9,
    INR: 0.01,
  },
  EUR: {
    PKR: 1.1,
    USD: 1.1,
    INR: 0.011,
  },
};
const anwsers: {
  from: "USD" | "PKR" | "EUR";
  to: "USD" | "PKR" | "EUR";
  amount: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    choices: ["USD", "PKR", "EUR"],
    message: "I want to convert:",
  },
  {
    type: "list",
    name: "to",
    choices: ["USD", "PKR", "EUR"],
    message: "to convert:",
  },
  {
    type: "number",
    name: "amount",
    message: "The amount i want to convert is: ",
  },
]);
const { from, to, amount } = anwsers;
if (from && to && amount) {
    console.log(from ,to)
    let results = convertion[from][to] * amount;
    console.log(`Your conversion was successful. If we convert ${amount} ${from} to ${to}, it will be ${results} ${to}`);
} else {
    console.log("An error has occurred. Please input valid values and try again.");
}
