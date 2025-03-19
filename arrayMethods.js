//Бодлого-1
console.log("Бодлого-1");

let numbers = [10, 20, 30, 40, 50];

numbers.push(60);

console.log(numbers);

numbers.unshift(5);

console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.reverse();
console.log(numbers);

numbers.splice(1, 1, 100);
console.log(numbers);

//Бодлого-2
console.log("Бодлого-2");
let number = [3, 6, 9, 12, 15];

let multiplyNumbers = number.map((number) => number * 2);

console.log(multiplyNumbers);

let filteredNumbers = number.filter((number) => number > 8);

console.log(filteredNumbers);

let newArray = [18, 21, 24];
let negtgehArray = number.concat(newArray);
console.log(negtgehArray);

let numberFlat = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flatArray = numberFlat.flat();
console.log(flatArray);

//Бодлого-3
console.log("Бодлого-3");

let colors = ["red", "blue", "green", "yellow", "purple"];

let greenIndex = colors.indexOf("green");

console.log(greenIndex);

let tawanUsegteiIndex = colors.findIndex((color) => color.length > 5);

console.log(tawanUsegteiIndex);

let colorStartY = colors.find((color) => color.startsWith("y"));

console.log(colorStartY);

//Гэрт

console.log("Гэрт");

let words = ["hello", "world", "javascript", "coding"];

let worldOloh = words.includes("world");

console.log(worldOloh);

let doloonUgtei = words.some((word) => word.length >= 7);

console.log(doloonUgtei);

let negtgeh = words.join(", ");

console.log(negtgeh);

let num = [4, 8, 12, 16];

let sum = num.reduce(
  (accumlator, currentValue) => accumlator + currentValue,
  0
);

console.log(sum);

num.forEach((number, index, array) => {
  array[index] = number * 3;
});

console.log(num);
