const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.getElementById("pass1");
let password2 = document.getElementById("pass2");
let charNum = document.getElementById("passLength");

function generatePassword() {
  let passwordLength = charNum.value;
  console.log(passwordLength);
  let newPassword1 = "";
  let newPassword2 = "";

  for (let i = 0; i <= passwordLength; i++) {
    let ranNum = Math.floor(Math.random() * characters.length);
    let newLetter = characters[ranNum];
    newPassword1 += newLetter;
  }

  for (let i = 0; i <= passwordLength; i++) {
    let ranNum = Math.floor(Math.random() * characters.length);
    let newLetter = characters[ranNum];
    newPassword2 += newLetter;
  }

  password1.textContent = newPassword1;
  password2.textContent = newPassword2;
}

function copyPassword1() {
  let copyText1 = document.getElementById("pass1").textContent;
  navigator.clipboard.writeText(copyText1);
}

function copyPassword2() {
  let copyText2 = document.getElementById("pass2").textContent;
  navigator.clipboard.writeText(copyText2);
}
