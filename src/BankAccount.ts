interface Transaction {
    type: string;
    amount: number;
    timestamp: Date;
  }
  
  class BankAccount {
    accountNumber: string;
    accountHolder: string;
    balance: number;
    transactions: Transaction[] = [];
  
    constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        this.logTransaction("deposit", amount);
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.error("Invalid deposit amount.");
      }
    }
  
    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.logTransaction("withdraw", amount);
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      } else {
        console.error("Invalid withdrawal amount or insufficient funds.");
      }
    }
  
    getBalance(): void {
      console.log(`Account balance for ${this.accountHolder}: $${this.balance}`);
    }
  
    private logTransaction(type: string, amount: number): void {
      const transaction: Transaction = {
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
  

  export default BankAccount;