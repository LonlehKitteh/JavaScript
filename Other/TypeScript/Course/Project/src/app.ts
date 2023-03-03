import {Invoice} from './classes/Invoice'
import {Payment} from './classes/Payment'
import {HasFormatter} from './interfaces/HasFormatter'

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Jon', 'web work', 150);
docTwo = new Payment('Julia', 'plumbing work', 100);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

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

  let doc: HasFormatter;

  if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  console.log(doc);
});

// classes

class InVoice1 {
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

const invOne = new InVoice1("Mario", "work on the website", 250);

console.log(invOne);

let invoices: InVoice1[] = [];
invoices.push(invOne);
invoices.push(invOne);

console.log(invoices);

// invOne.client = "Chris"; // error
// we have access to deny access use ACCESS MODIFIER (public, private, readonly)

console.log();
