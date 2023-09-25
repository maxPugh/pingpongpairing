const { test } = require("@jest/globals");
const BankAccount = require("./script");

test("BankAccount should have customerName, accountNumber, balance fields", () => {
  const bankAccount = new BankAccount("John Doe", 123456789, 1000);
  expect(typeof bankAccount.customerName).toBe("string");
  expect(typeof bankAccount.accountNumber).toBe("number");
  expect(typeof bankAccount.balance).toBe("number");
});
test("BankAccount should have methods to set: customerName, accountNumber, and balance", () => {
  const bankAccount = new BankAccount("John Doe", 123456789, 1000);
  bankAccount.setCustomerName("Jane Doe");
  bankAccount.setAccountNumber(987654321);
  bankAccount.setBalance(500);
  expect(bankAccount.customerName).toBe("Jane Doe");
  expect(bankAccount.accountNumber).toBe(987654321);
  expect(bankAccount.balance).toBe(500);
});
