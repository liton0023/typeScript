class BankAccount {
  public id: number;
  public name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  getBalance() {
    console.log(`My Current balance is: ${this.balance}`);
  }
  addDeposit(ammunt: number) {
    this.balance = this.balance + ammunt;
  }
}

const myAccount = new BankAccount(444, "Persian", 20);
// myAccount.balance = 0;
myAccount.addDeposit(20);
myAccount.getBalance();
