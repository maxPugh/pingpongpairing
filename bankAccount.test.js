const { test } = require("@jest/globals");
const BankAccount = require("./script");

test("BankAccount should have customerName, accountNumber, balance fields", () => {
  const bankAccount = new BankAccount();
  expect(typeof bankAccount.customerName).toBe("string");
  expect(typeof bankAccount.accountNumber).toBe("number");
  expect(typeof bankAccount.balance).toBe("number");
});
