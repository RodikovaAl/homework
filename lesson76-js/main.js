console.log('Урок 2.76')
const firstName = "Sasha";
const lastName = "Rodikova";
let age = 2;

console.log(firstName, lastName, age, "y.o.");
console.log();

let dataDay = 10;
let dataMonth = "april 2024";
console.log("Дата создания", dataDay, dataMonth);
console.log();

let data = new Date();
console.log("Текущая дата - ", data);

console.log('Урок 2.77')

const x = 14;
const y = 13;

const product = x * y;
const division = y / x;

const degree = x ** y;
const rem = x % y;

console.log("Умножение - ", product);
console.log("Деление - ", division);
console.log("Степень - ", degree);
console.log("Остаток от деления - ", rem);

console.log('Урок 2.79')
let res = null;
const a = 15;
const b = 100;
if (a == b) {
  res = a + b;
  console.log(res);
} else {
  res = b - a;
  console.log(res);
}
let res1 = null;
if (a == b) {
  res1 = a + b;
} else if (a > b) {
  res1 = a * b;
} else {
  res1 = a / b;
}
console.log(res1);

const alex = 'vip'
alex == 'admin' ? console.log('Yes') : console.log('No')

const humanAage = 75
humanAage >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18’')