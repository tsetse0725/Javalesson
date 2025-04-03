// const datefns = require("date-fns");
 
// import {
//     format,
//     addDays,
//     addBusinessDays,
//     addHours,
//     addYears,
//     subMonths,
//     subDays,
//   } from "date-fns";

//   import { merge } from "lodash";
  const { merge } = require('lodash')
   
//   const today = new Date();
   
//   const formattedToday = format(today, "MM/dd/yy");
//   console.log(formattedToday);
//   console.log(today);
   
//   const addedDays = addDays(today, 5);
//   const addedBusinessDays = addBusinessDays(today, 5);
//   const addedHours = addHours(today, 12);
//   const addedYears = addYears(today, 2);
//   const subbedMonths = subMonths(today, 3);
//   const subbedDays = subDays(today, 7);
   
//   console.log("Add 5 days:", addedDays);
//   console.log("Add 5 business days:", addedBusinessDays);
//   console.log("Add 12 hours:", addedHours);
//   console.log("Add 2 years:", addedYears);
//   console.log("Subtract 3 months:", subbedMonths);
//   console.log("Subtract 7 days:", subbedDays);

const object1 = {a : 1}
const object2 = {b : 2}
const mergedObject = merge(object1, object2)
console.log(mergedObject)

//framework
