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
    console.log(type.value, amount.valueAsNumber);
});
