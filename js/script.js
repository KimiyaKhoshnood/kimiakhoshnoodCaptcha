let captcha = document.querySelector("#captcha");
let input = document.querySelector("#input");
let btnContinue = document.querySelector("#continue");
let btnRefresh = document.querySelector("#refresh");

let abc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let newArr;
function makingCaptcha() {
  newArr = [];
  for (let i = 0; i < 5; i++) {
    newArr.push(abc[Math.floor(Math.random() * 100) % 61]);
  }
  captcha.innerHTML = newArr.join("");
}

makingCaptcha();

btnRefresh.addEventListener("click", () => {
  makingCaptcha();
  input.value = "";
});

btnContinue.addEventListener("click", () => {
  if (input.value == newArr.join("")) {
    alert("CAPTCHA varified!");
    input.value = "";
  } else {
    alert("Wrong!");
  }
});

//part2

let captcha2 = document.querySelector("#captcha2");
let input2 = document.querySelector("#input2");
let btnContinue2 = document.querySelector("#continue2");
let btnRefresh2 = document.querySelector("#refresh2");

let newArr2;
let funcs = ["+", "-"];
let firstNum = (Math.floor(Math.random() * 100) % 30) + 1;
let secondNum = (Math.floor(Math.random() * 100) % 30) + 1;
let func = funcs[Math.floor(Math.random() * 10) % 2];

captcha2.innerHTML = firstNum + func + secondNum;
btnRefresh2.addEventListener("click", () => {
  firstNum = (Math.floor(Math.random() * 100) % 30) + 1;
  secondNum = (Math.floor(Math.random() * 100) % 30) + 1;
  func = funcs[Math.floor(Math.random() * 10) % 2];
  captcha2.innerHTML = firstNum + func + secondNum;
  input.value = "";
});

btnContinue2.addEventListener("click", () => {
  if (input2.value == eval(firstNum + func + secondNum)) {
    console.log("yes");
    alert("CAPTCHA varified!");
    input2.value = "";
  } else {
    alert("Wrong!");
  }
});
