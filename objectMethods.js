const hello = { a: "1", b: 2, c: 3 };

const keyeerGuih = Object.keys(hello);
console.log(keyeerGuih);

const valueGuih = Object.values(hello);
console.log(valueGuih);

const entriesGuih = Object.entries(hello);
console.log(entriesGuih);

keyeerGuih.map((el) => {
  hello[el] = 4;
});

console.log(hello);

keyeerGuih.map((el) => {
  console.log(hello[el]);
});
