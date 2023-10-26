import BankAccount from "./BankAccount";


// Create a new BankAccount instance
const account = new BankAccount("123456789", "John Doe", 1000);

// Deposit funds
account.deposit(500);

// Withdraw funds
account.withdraw(200);

// Get the account balance
account.getBalance();
