const anchor = document.querySelector("a"); // or ! at the end of this

console.log(anchor?.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, amount.valueAsNumber);
});

// classes

class Invoice {
  // readonly client: string; // allows to read inside and outside the class you cannot change value
  // private details: string; // allows to read and change inside the class
  // public amount: number; // change and read value inside and outside of the class

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  // OR

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("Mario", "work on the website", 250);

console.log(invOne);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invOne);

console.log(invoices);

// invOne.client = "Chris"; // error
// we have access to deny access use ACCESS MODIFIER (public, private, readonly)

console.log();
