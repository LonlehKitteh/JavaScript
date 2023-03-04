"use strict";
import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
var docOne
var docTwo;
docOne = new Invoice('Jon', 'web work', 150);
docTwo = new Payment('Julia', 'plumbing work', 100);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
var anchor = document.querySelector("a"); // or ! at the end of this
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
var form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// classes
var InVoice1 = /** @class */ (function () {
    // readonly client: string; // allows to read inside and outside the class you cannot change value
    // private details: string; // allows to read and change inside the class
    // public amount: number; // change and read value inside and outside of the class
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    // OR
    function InVoice1(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    InVoice1.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return InVoice1;
}());
var invOne = new InVoice1("Mario", "work on the website", 250);
console.log(invOne);
var invoices = [];
invoices.push(invOne);
invoices.push(invOne);
console.log(invoices);
// invOne.client = "Chris"; // error
// we have access to deny access use ACCESS MODIFIER (public, private, readonly)
console.log();
