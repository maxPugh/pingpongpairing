class BankAccount {
  constructor(customerName, accountNumber, balance) {
    this.customerName = customerName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  setCustomerName(customerName) {
    this.customerName = customerName;
  }

  setAccountNumber(accountNumber) {
    this.accountNumber = accountNumber;
  }

  setBalance(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

class CustomerAccount extends BankAccount {
  constructor(customerName, accountNumber, balance) {
    super(customerName, accountNumber, balance);
    this.overdraftLimit = -1000;
  }

  withdraw(amount) {
    if (this.balance - amount > this.overdraftLimit) {
      super.withdraw(amount);
    } else {
      throw new Error("Insufficient funds");
    }
  }
}

module.exports = BankAccount;
