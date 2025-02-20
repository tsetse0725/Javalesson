// alert("hello, world!");

// let message = 120;
// console.log(typeof message);

// let sum = 10 + 20;
// console.log(sum);

// let une = 10000;
// let noat = 1000;
// let niitUne = une + noat;
// console.log(niitUne);
// let message = "Hello, world!"; // String
// console.log(message);

// let age = 42; // Number
// console.log(age);

// let isStudent = true; // Boolean
// console.log(isStudent);

// let x; // undefined
// console.log(x);

// let n = null; // null
// console.log(n);

// let student = {
//   program: "HOP",
//   level: 1,
//   name: null,
//   isMale: false,
// };

// console.log(student);

// let studentList = [
//   {
//     program: "HOP",
//     level: 1,
//     name: null,
//     isMale: false,
//   },
//   {
//     program: "HOP",
//     level: 1,
//     name: "Orgil",
//     isMale: true,
//   },
//   {
//     program: "HOP",
//     level: 1,
//     name: "Bataa",
//     isMale: false,
//   },
// ];

// console.log(studentList);

// let studentsName = ["Orgil", "Naraa", "Bataa"];

// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// console.log(person.firstName);
// console.log(person.lastName);

// let array = ["car", "apple", "pen", "bowl"];
// console.log(array[0]);
// console.log(array[1]);

// const textOne = "1";
// const numberOne = 1;

// console.log(typeof textOne);
// console.log(typeof numberOne);

// const textTwo = "2";
// const numberTwo = 2;

// console.log(numberTwo + textTwo, typeof (numberTwo + textTwo));
// console.log(numberTwo / textTwo, typeof (numberTwo / textTwo));

// const textThree = "Hello world";
// const numberThree = 23;
// console.log(textThree + numberThree, typeof (textThree + numberThree));
// console.log(textThree / numberThree, typeof (textThree / numberThree));

// const numberFour = 10;
// console.log(undefined / numberFour, typeof (undefined / numberFour));
// console.log(false / numberFour, typeof (false / numberFour));
// console.log(true / numberFour, typeof (true / numberFour));
// console.log(null / numberFour, typeof (null / numberFour));

// let a = 5;
// let b = 10;
// let c = 15;

// perimetr = a + b + c;

// console.log("bodlogo-1: ugugdsun gurvaljingiin perimetr-iig ol:");
// console.log("bodlogo-1 hariu: ","Perimetr=", perimetr);

// let sum = 0;
// const numbers = [1, 3, 5, 7, 8.7];
// numbers.forEach(myFunction);
// function myFunction(item) {
//   sum += item;
// }
// console.log("bodlogo-2: buhel toonii niilberiig ol:");
// console.log("bodlogo-2 hariu: ", sum);

// urt = 10;
// urgun = 5;
// peri = 2 * (urt + urgun);
// talbai = urt * urgun;

// console.log("bodlogo-3: ugugdsun tegsh untsugtiin talbai ba perimetriig ol:");
// console.log("bodlogo-3 hariu: ","Perimetr=", peri,"Talbai=", talbai);

// let totalSec = 98;
// let sec = 0;
// let min = 0;

// sec = totalSec % 60;
// min = Math.floor(totalSec / 60);

// console.log("Bodlogo-4: ugugdsun sec iig min sec hurvuul: ", totalSec);
// console.log("Bodlogo-4 hariu: ", min + "min " + sec + "sec");

// let totalaSec = 1297;
// let seco = 0;
// let minu = 0;
// let hour = 0;

// seco = (totalaSec % 60) % 60;
// minu = Math.floor(totalaSec / 60);
// hour = Math.floor(totalaSec / 60 / 60);

// console.log(
//   "bodlogo-5: ugugdsun sec iig min sec tsag ruu hurvuul: ",
//   totalaSec
// );
// console.log("bodlogo-5 hariu: ", hour + "tsag " + minu + "min " + seco + "sec");

// let minut = 875;
// let secund = 88;
// let totalSecon = 0;

// totalSecon = minut * 60 + secund;

// console.log("bodlogo-6: ugugdsun min sec-iig secund ruu hurvuul:");
// console.log("bodlogo-6 hariu: ", totalSecon + "Sec");

// let tsag = 83;
// let minuto = 84;
// let secundo = 85;
// totalSecond = 0;

// totalSecond = tsag * 60 * 60 + minuto * 60 + secundo;

// console.log("bodlogo-7: ugugdsun tsag min sec-iig sucund ruu hurvuul:");
// console.log("bodlogo-7 hariu: ", totalSecond + "Sec");


//bodlogo-2   //9,3,2

let toot1 = 2;
let toot2 = 3;
let toot3 = 9;

if(toot1 < toot2 && toot1 < toot3){
  if(toot1 < toot3){
    console.log("Hamgiin baga too", toot1);
  }else if(toot2 < toot1 && toot2 < toot3){
    console.log("Hamgiin baga too", toot1)
  }
}else if(toot3 < toot1 && toot3 < toot2 ) {
  console.log("Hamgiin baga too", toot3);
}

//bodlogo-4

let t1 = 2;
let t2 = 9;
let t3 = 4;

let urjver = 1;

if(t1 < 5){
 urjver = urjver * t1; 
}

if(t2 < 5){
  urjver = urjver * t2; 
 }

 if(t3 < 5){
  urjver = urjver * t3; 
 }

urjver = t1 * t2 * t3;
console.log("Urjver", urjver)

//bodlogo-6

let sar = 9;

if(sar === 12 || sar === 1 || sar === 2){
  console.log("Өвлийн улирал байна.");
}else if(sar === 3 || sar === 4 || sar === 5){
  console.log("Хаврын улирал байна.");
}else if(sar === 6 || sar === 7 || sar === 8){
  console.log("Зуны улирал байна.");
}else if(sar === 9 || sar === 10 || sar === 11){
  console.log("Намрын улирал байна.");
}else{
  console.log("Таны оруулсан сарын тоо буруу байна.");
}

//bodlogo-1

let m1 = 3, 
m2 = 2, 
m3 = 11, 
m4 = 7;

if(m1 % 2 === 0){
  console.log("Even")
}else{
  console.log("Odd")
}
if(m2 % 2 === 0){
  console.log("Even")
}else{
  console.log("Odd")
}
if(m3 % 2 === 0){
  console.log("Even")
}else{
  console.log("Odd")
}
if(m4 % 2 === 0){
  console.log("Even")
}else{
  console.log("Odd")
}

let nums = [3,2,11,7];
console.log("===============");

for(let i=0; i < 4; i ++){
  if(nums[i] % 2 === 0){
    console.log("Even", nums[i])
  }else{
    console.log("Odd", nums[i])
  } 
}

let j = 0;

while(j < 4){
  if(nums[j] % 2 === 0){
    console.log("Even", nums[j])
  }else{
    console.log("Odd", nums[j])
  } 
  j ++;
}

