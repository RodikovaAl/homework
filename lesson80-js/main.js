const num = [1, 2, 4, 25, 6, 7, 12, 15, 10];
console.log(num);

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log("----", num[i]);
  }
}

const colorRainbow = [
  "красный",
  "оранжевый",
  "жёлтый",
  "зелёный",
  "голубой",
  "синий",
  "фиолетовый",
];
console.log(colorRainbow);
for (let i = colorRainbow.length; i >= 0; i--) {
  console.log(colorRainbow[i]);
}

console.log("Урок 2.82");
console.log("Задание 1");

function welcome(Name) {
  return Name;
}
const namePeople = welcome("Amelie");
console.log(`Hello ${namePeople}`);

console.log("Задание 2");
numbers = [1, 15, 14, 2, 7, 5, 4, 64, 74, 2, 32, 564, 7];
console.log(numbers);
function numbersTen(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]);
    }
  }
}

const result = numbersTen(numbers);

console.log("Задание 3");

function calculator(firstArgument, secondArgument, mark) {
  if (mark === "plus") {
    return firstArgument + secondArgument;
  } else if (mark === "minus") {
    return firstArgument - secondArgument;
  } else if (mark === "divide") {
    return firstArgument / secondArgument;
  } else if (mark === "multiply") {
    return firstArgument * secondArgument;
  } else {
    console.log(`There are no solutions`);
  }
}

const endRresult1 = calculator(15, 12, "plus");
const endRresult2 = calculator(15, 32, "minus");
const endRresult3 = calculator(15, 2, "divide");
const endRresult4 = calculator(4, 2, "multiply");
console.log(endRresult1);
console.log(endRresult2);
console.log(endRresult3);
console.log(endRresult4);

console.log("Урок 2.83");

const user = {
  name: "Sasha",
  age: 24,
  sayHello(name) {
    console.log(`Hello, ${name}!`);
  },
};
console.log(user.sayHello("Ivan"));

const users = [
  {
    name: "Masha",
    age: 45,
    isAdmin: true,
  },
  {
    name: "Pavel",
    age: 35,
    isAdmin: false,
  },
  {
    name: "Boris",
    age: 25,
    isAdmin: false,
  },
  {
    name: "Ivan",
    age: 75,
    isAdmin: true,
  },
  {
    name: "Sonya",
    age: 25,
    isAdmin: true,
  },
  {
    name: "Kolya",
    age: 37,
    isAdmin: false,
  },
  {
    name: "Kristina",
    age: 15,
    isAdmin: true,
  },
];

let sumAdmin = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === true) {
    sumAdmin++;
  }
}
console.log(`sum Admin - `, sumAdmin)