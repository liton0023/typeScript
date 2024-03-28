class BankAccount {
  public id: number;
  public name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  private getTestBalance(): number {
    return this.balance;
  }

  get Test(): number {
    return this.getTestBalance();
  }

  //   getter
  get balances(): number {
    return this.balance;
  }
  //   getBalance() {
  //     console.log(`My Current balance is: ${this.balance}`);
  //   }

  // setter

  set deposit(ammunt: number) {
    this.balance = this.balance + ammunt;
  }
  addDeposit(ammunt: number) {
    this.balance = this.balance + ammunt;
  }
}

const myAccount = new BankAccount(444, "Persian", 20);
// myAccount.balance = 0;
// myAccount.addDeposit(20);
// myAccount.getBalance();

console.log(myAccount.balances);
myAccount.deposit = 50;
console.log(myAccount.balances);
