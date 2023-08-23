//? Create a file with the User class, including the constructor and makeDeposit methods:

class User {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
    this.accountBalance = 0;
  }
  makeDeposit(amount) {
    this.accountBalance += amount
  }
//? Add a makeWithdrawal method to the User class
  makeWithdrawal(amount) {
    this.accountBalance -= amount
  }
//? Add a displayBalance method to the User class
  displayBalance() {
    console.log(this.accountBalance)
  }
//? Transfer Money method bonus
  transferMoney(amount, recipient) {
    this.accountBalance -= amount;
    recipient.accountBalance += amount;
  }
}

//? Create 3 instances of the User class
const Matt = new User("Matt", "mjfru@gmail.com")
const Sandy = new User ("Sandy", "fromtexas@aol.com")
const Patrick = new User ("Patrick", "starfishboi@yahoo.com")

//? Have the first user make 3 deposits and 1 withdrawal and then display their balance
Matt.makeDeposit(100);
Matt.makeDeposit(150);
Matt.makeDeposit(50);
Matt.makeWithdrawal(100);
Matt.displayBalance();

//? Have the second user make 2 deposits and 2 withdrawals and then display their balance
Sandy.makeDeposit(400);
Sandy.makeDeposit(200);
Sandy.makeWithdrawal(300);
Sandy.makeWithdrawal(50);
Sandy.displayBalance();

//? Have the third user make 1 deposit and 3 withdrawals and then display their balance
Patrick.makeDeposit(500);
Patrick.makeWithdrawal(50);
Patrick.makeWithdrawal(100);
Patrick.makeWithdrawal(10);
Patrick.displayBalance();

//! BONUS: Add a transferMoney method; have the first user transfer money to the third user and then print both users' balances
Matt.displayBalance();
Patrick.displayBalance();
Matt.transferMoney(100, Patrick)
Matt.displayBalance();
Patrick.displayBalance();
