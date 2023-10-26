"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance) {
        this.transactions = [];
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.logTransaction("deposit", amount);
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.error("Invalid deposit amount.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.logTransaction("withdraw", amount);
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.error("Invalid withdrawal amount or insufficient funds.");
        }
    }
    getBalance() {
        console.log(`Account balance for ${this.accountHolder}: $${this.balance}`);
    }
    logTransaction(type, amount) {
        const transaction = {
            type,
            amount,
            timestamp: new Date(),
        };
        this.transactions.push(transaction);
    }
}
// Demonstration
// const account = new BankAccount("123456789", "John Doe", 1000);
// account.getBalance();
// account.deposit(500);
// account.withdraw(200);
// account.getBalance();
// account.withdraw(1500); // This should fail due to insufficient funds
// account.deposit(-100);  // This should fail due to an invalid deposit amount
exports.default = BankAccount;
