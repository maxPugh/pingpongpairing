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
}

module.exports = BankAccount;
