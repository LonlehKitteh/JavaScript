import { Invoice } from "./classes/Invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/Payment";
import { HasFormatter } from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Jon", "web work", 150);
docTwo = new Payment("Julia", "plumbing work", 100);

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

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
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

//enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne1: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};

const docTwo2: Resource<string> = {
  uid: 10,
  resourceType: ResourceType.AUTHOR,
  data: "Me",
};

// tuples

let arr = ["ryu", 25, true];

let tup: [string, number, boolean];
tup = ["ryu", 25, true];
