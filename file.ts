import inquirer from "inquirer";

let myBalance = 30000; //dollars
let pinCode = 4472; //password

//print a message
console.log(`Welcome to Code with Maryam - ATM machine`);

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin",
  },
]);

if (pinAnswer.pin === pinCode) {
  console.log("Pin is correct, login successfully");
  console.log(`Current account balance is ${myBalance}`);

  let operatorAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Please select operation",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (operatorAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount to withdraw",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance");
    } else {
      myBalance -= amountAns.amount;
      console.log(`${amountAns.amount} withdrawn successfully`);
      console.log(`Your Account Balance is ${myBalance}`);
    }
  } else if (operatorAns.operation === "check balance") {
    console.log(`Your Account Balance is: ${myBalance}`);
  }
} else {
  console.log("Pin is incorrect");
}
