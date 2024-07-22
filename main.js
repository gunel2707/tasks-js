// Array Task 1

// Swap the last element with the first element of the given array

// const arr  = ['work', 'eat', 'sleep']
//-------------------------------------------------------------
// const arr  = ['work', 'eat', 'sleep'];
// // arr.reverse()
// // console.log(arr);
// arr.unshift(arr[2]);
// arr.pop();

// console.log(arr);
//================================================================
// Array Task 2

// Sort the given array alphabetically and find the 1st element

// let arr1 = ['sleep', 'work', 'exercise']
//----------------------------------------------------------------
// let arr1 = ['sleep', 'work', 'exercise']
// arr1.sort();
// console.log(arr1);
// console.log(arr1[0]);
//================================================================
// Array Task 3

// Find values dividing by index 2 from the given array

// const arr1 = [2, 4, 7, 9, 11, 13, 14, 15 6, 8];
//-------------------------------------------------------------
// const arr1 = [2, 4, 7, 9, 11, 13, 14, 15, 6, 8];
// for (i = 0; i < arr1.length; i++) {
//   if (i % 2 == 0) {
//     console.log(arr1[i]);
//   }
// }
//============================================================
// Create the new array by combining the names and surnames properly by using the given arrays

// let names = ['Tomas', 'Maria', 'Katty'];
// let surnames = ['Swift', 'Perry', 'Jonatan'];

// Result must be: ['Tomas Jonatan', 'Maria Perry', 'Katty Swift']
//-----------------------------------------------------------------------
// let names = ['Tomas', 'Maria', 'Katty'];
//  let surnames = ['Swift', 'Perry', 'Jonatan'];
// let result = names.map((item, i)=> names[i] + " "+ surnames[surnames.length - i - 1])
//  console.log(result);
//================================================================

// Array Task 5

// Delete the word 'Sea' from each item of the given array

// const arr = [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]
//----------------------------------------------------------
//  const arr = [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ];
// let newArrr = arr.map((item, i)=>{
//    return item.replace("Sea", "").trim()
// })

// console.log(newArrr);
//====================================================================================
// Array Task 6

// Finding objects whose property is array and whose length is greater than 0 from the given array

// const arr = [
// { obj: {}, arr1: [], str: "", nmb: 77 },
// { obj: {}, arr1: [{str: ""}], str: "", nmb: 77 },
// { obj: {}, arr1: [{str: ""}], str: "", nmb: 77 },
// { obj: {}, arr1: [], str: "", nmb: 77 }
// ]
//------------------------------------------------------------
//  const arr = [
//     { obj: {}, arr1: [], str: "" , nmb: 77 },
//     { obj: {}, arr1: [{str: ""}], str: "", nmb: 77 },
//     { obj: {}, arr1: [{str: ""}], str: "", nmb: 77 },
//     { obj: {}, arr1: [], str: "", nmb: 77 }]

//     console.log(arr[1],arr[2]);
//=======================================================================================
// Array Task 7

// Fix the code error in the given array

// const arr = [
// { a { b: { c: } } }
// { a { b: { c: } } }
// { a { b: { c: } } }
// { a { b: { c: } } }
// ]
//------------------------------------------------------------
// const arr = [
// { a: { b: { c } } },
// { a: { b: { c } } },
// { a: { b: { c } } },
// { a :{ b: { c } } }
// ]
//===================================================================================
// Array Task 8

// Convert the age property to Number type in the given array.
//Then the names and surnames should be written with upper case

// const arr = [
// { name: "miki", surname: "Jonatan", "age": "21" },
// { name: "miki", surname: "Jonatan", "age": "21" },
// { name: "miki", surname: "Jonatan", "age": "21" },
// ]
//---------------------------------------------------------------------
// const arr = [
// { name: "miki", surname: "Jonatan", "age": "21" },
// { name: "miki", surname: "Jonatan", "age": "21" },
// { name: "miki", surname: "Jonatan", "age": "21" },
// ]

// arr.forEach(item=>{ item.name=item.name.toUpperCase();
//     item.surname=item.surname.toUpperCase();
//     item.age=Number(item.age);
// })
// console.log(arr);
//=========================================================================
// Array Task 9

// Finding mixed data types from given arrays

// const arr1 = [2, 4, 6, 8];
// const arr2 = ['eat', 'work', 'sleep'];
// const arr3 = ['work', 'exercise', 1, true];
//----------------------------------------------------------------
// const arr1 = [2, 4, 6, 8];
// const arr2 = ["eat", "work", "sleep"];
// const arr3 = ["work", "exercise", 1, true];

// function typeOfArray(arr) {
//     // tiplerini tapdiq
//   let typeArr = arr.map((item) => {
//     return typeof item;
//   });

//   console.log(typeArr);

//   //
//   let uniqueArr = new Set(typeArr);

//   console.log(uniqueArr);

//   if (uniqueArr.size > 1) {
//     console.log('Mixed array');
//   }
//   else{
//     console.log('1 tipli array');

//   }
// }

// typeOfArray(arr1);
// typeOfArray(arr2);
// typeOfArray(arr3);
//=========================================================================

// Array Task 10

// Convert the given array elements to the correct number type and calculate sum with reduce method

// const arr = ["5 1", "98", "1 2 3", "0"]

// Note: Note the spaces between the values. Spaces should be deleted. Example tip: "1 2 3" => "123"
//-----------------------------------------------------------------
// const arr = ["5 1", "98", "1 2 3", "0"];
// let arr2=arr.map(item=>{ return item.replaceAll(" ","")})
// console.log(arr2);

//=======================================================================

// Array Task 11

// Calculate the total salary in the given array for those whose age-i is greater than 18

// const = [
// { person: { age: "29", salary: "300" } },
// { person: { age: "19", salary: "400" } },
// { person: { age: "9", salary: "500" } },
// { person: { age: "18", salary: "600" } },
// ]
//------------------------------------------------------------
// const arr = [
//     { person: { age: "29", salary: "300" } },
//     { person: { age: "19", salary: "400" } },
//     { person: { age: "9", salary: "500" } },
//     { person: { age: "18", salary: "600" } }
//     ]

//     let filteredArr=arr.filter(item=>item.person.age>18 )
//     console.log(filteredArr);
// const calcArray=filteredArr.reduce((sum,item)=>{return sum+(+item.person.salary)},0);
// console.log(calcArray);

//================================================================================

// Array Task 12

// Delete duplicate values from given array

// const fruits = ['Apple', 'Banana', 'Strawberry', 'Banana', 'Mango', 'Cherry', 'Banana', 'Mango',];
//--------------------------------------------------------------------------------------------------
// const fruits = ['Apple', 'Banana', 'Strawberry', 'Banana', 'Mango', 'Cherry', 'Banana', 'Mango',];
// let dublicate=new Set( ['Apple', 'Banana', 'Strawberry', 'Banana', 'Mango', 'Cherry', 'Banana', 'Mango',]);
// console.log(dublicate);
//============================================================================================================

// Filter the elements whose types are number in the given array

// const arr = ["Tomas", 54, "Rihanna", 49, { age: 88 }, [5], "Javascript"]
//--------------------------------------------------------------------------
// const arr = ["Tomas", 54, "Rihanna", 49, { age: 88 }, [5], "Javascript"];
// let arr1 = arr.filter((item) => typeof item == "number");
// console.log(arr1);
//========================================================================================================

//Array Task 14

// Create a function that takes in an array of numbers and returns the sum of all even numbers in the array.

// function sumOfEvenNumbers(arr) {
//   // write code...
// }

// console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
//---------------------------------------------------------------------------
// const arr = [1, 2, 3, 4, 5, 6];

// function sumOfEvenNumbers(array) {
//   let s = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//        s = s + array[i];
//     }
//   }

//   return s;
// }
// console.log(sumOfEvenNumbers(arr));
//==================================================================================

// Array Task 15

// Create a function that takes in an array of numbers and returns the highest number in the array.

// function highestNumber(arr) {
//   // write code...
// }

// console.log(highestNumber()); // Output: 10
//--------------------------------------------------------------------
// const arr = [1, 5, 10, 3];
// function highestNumber(array) {
//   let max = 0;
//   array.forEach((item) => {
//     if (item > max) {
//       max = item;

//     }
//   });
//   return max;

//   //   let m = 0;
//   //   return (m = Math.max(...array));
// }
// console.log(highestNumber(arr));
//========================================================================================

// Array Task 16

// Create a function that takes in an array of strings and returns a new array with all strings reversed.

// function reverseStrings(arr) {
//   // write code...
// }

// console.log(reverseStrings(["hello", "world"])); // Output: ["olleh", "dlrow"]
//--------------------------------------------------------------------------------
// function reverseString(arr) {
//     let str=arr.join('');
//  return str.split("").reverse().join("").split(' ');
//  }
//  console.log(reverseString(["Hello World"]));

//==============================================================================================

// Array Task 17

// Create a function that takes in an array of numbers and returns a new array with all numbers squared.

// function squareNumbers(arr) {
//   // write code...
// }

// console.log(squareNumbers([1, 2, 3])); // Output: [1, 4, 9]
//-----------------------------------------------------------------------------------------------
// const array=[1,2,3]
// function squareNumbers(arr) {
//   return  arr.map(item=>Math.pow(item,2))
//    }
//    console.log(squareNumbers(array));
//======================================================================================================

// Array Task 18

// Group an array of objects by a category property

// const products = [
//     { name: "iPhone", category: "Electronics" },
//     { name: "T-shirt", category: "Clothing" },
//     { name: "Headphones", category: "Electronics" },
//     { name: "Jeans", category: "Clothing" },
//   ];

// console.log(groupedProducts);
// Output:
// {
//   Electronics: [
//     { name: 'iPhone', category: 'Electronics' },
//     { name: 'Headphones', category: 'Electronics' }
//   ],
//   Clothing: [
//     { name: 'T-shirt', category: 'Clothing' },
//     { name: 'Jeans', category: 'Clothing' }
//   ]
// }

//---------------------------------------------------------------------------------
// const products = [
//     { name: "iPhone", category: "Electronics" },
//     { name: "T-shirt", category: "Clothing" },
//     { name: "Headphones", category: "Electronics" },
//     { name: "Jeans", category: "Clothing" },
//   ];
//   const result = Object.groupBy(products, ({ category }) => category);
//   console.log(result);
//========================================================================================

// Array Task 19

// Find the average of an array of numbers.

// const numbersArr = [10, 15, 20, 25, 30];
// console.log(average); // Output: 20
//--------------------------------------------------------------------------
// const numbersArr = [10, 15, 20, 25, 30];
// let s=0;
// let average=1;
// for (i=0;i<numbersArr.length;i++){
//     s+=numbersArr[i];average=s/numbersArr.length;
//  }
// console.log(average);

//=========================================================================================

// Array Task 20

// Remove falsy values from an array.

// const values = [0, false, "", undefined, null, NaN, 42, "Hello"];
// console.log(truthyValues); // Output: [42, 'Hello']
//---------------------------------------------------------------------------------------
// const values = [0, false, "", undefined, null, NaN, 42, "Hello"];
//  let arr=values.filter(item=>item)
//  console.log(arr);

//=====================================================================================

// Array Task 21

// Flatten a nested array into a single-level array.

// const nestedArray = [1, [2, [3, [4, [5]]]]];
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
//------------------------------------------------------------------------
// const nestedArray = [1, [2, [3, [4, [5]]]]];
// let flattenedArray=nestedArray.flat(Infinity);
// console.log(flattenedArray);

//==================================================================================

// Date Task 1

// Compare the given dates and find the largest one

// let d1 = "2015-03-25"
// let d2 = "2015-06-25"
// let d3 = "2015-03-15"
//----------------------------------------------------------------------------
// let d1 = "2015-03-25";
// let d2 = "2015-06-25";
// let d3 = "2015-03-15";
// if (d1 > d2 && d2 > d3) {
//   console.log(d1);
// }
// if(d2>d1 && d1>d3) {
//     console.log(d2);
// }
// else console.log(d3);

//==============================================================================

// Date Task 2

//  Add 5 days to the given date and show the result

// let d1 = "2015-03-25"

//----------------------------------------------------

//  let d1 = new Date("2015-03-25")
//  d1.setDate(d1.getDate()+5);
// console.log(d1);
//==============================================================================

// Create a function that shows us our age by adding our date of birth
//------------------------------------

// let BirthDate=+prompt("Dogum ilinizi daxil edin:");
// console.log(BirthDate);
// function age(d1){
//     const d=new Date();
// console.log(d);
//  return console.log(d.getFullYear()-d1);
// }
// age(BirthDate);
// const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
// //getAge('1994-06-14');
// console.log(getAge('1994-06-14'));
//============================================================================================================

//Create a function that shows how many days we have lived so far by adding our age
// var getAge = function(year,month,date){
//     var today = new Date();
//     var dob = new Date();
//     dob.setFullYear(year);
//     dob.setMonth(month-1);
//     dob.setDate(date);
//     var timeDiff = today.valueOf() - dob.valueOf();
//     var milliInDay = 24*60*60*1000;
//     var noOfDays = timeDiff / milliInDay;
//     //var daysInYear = 365.242;
//     return console.log(noOfDays);
//     //( noOfDays / daysInYear  ) ;
// }
// getAge(1990,12,13);

//=======================================================================================================

//Function Task 3

// Create a arrow function that calculates the square of a number
//---------------------------------------------------------------
// const array=[1,2,3,4,5]
// let square=array.map(item=> Math.pow(item,2))
// console.log(square);

//=================================================================================================

//Function Task 4

// Create a function print the EVEN numbers from 10 to 49
//-----------------------------------------------------------
// function print(){
//     for(let i=10;i<49;i++) {
//         if(i%2==0){console.log(i);}
//     }
// }
// print();

//===========================================================================================================

// Function Task 5

// Create a function using the Ternary operator to show is day or night
//--------------------------------------------------------------------

// function hours() {
//   let date = new Date();
//   let hour = date.getHours();
//   console.log(hour);
//   hour > 6 && hour < 18 ? console.log("day") : console.log("night");
// }
// hours();

//============================================================================================================

// Function Task 6

// Create a function that takes in two numbers and returns the larger of the two.

// function largerNumber(num1, num2) {
//   // write code...
// }

// console.log(largerNumber(5, 10)); // Output: 10
//-------------------------------------------------------------------------------
// let n=+prompt("Birinci ededi daxil edin!");
// let m=+prompt("Ikinci ededi daxil edin!");
// function largerNumber(num1, num2) {
// if (num1>num2) {console.log(num1);}
// else console.log(num2);}
// largerNumber(n,m);

//========================================================================================================
// Number Task 1

// Using the Math method, create a method that can show random numbers from 1 to 20

// Then you write a certain condition, whenever the number is even, log should be written
//------------------------------------------------------------------
// let n=parseInt((Math.random()*20)+1);
// if (n%2==0) {console.log(n);}

//===========================================================================================================
// Object Task 1

// By making use of the Object entries method, show the properties whose type is number in the console

// const obj = {
//     a1: "test",
//     b1: 4,
//     c1: "hello",
//     d1: 6,
//     e1: "welcome"
//   }
//------------------------------------------------------------------------
// const obj = {
//   a1: "test",
//   b1: 4,
//   c1: "hello",
//   d1: 6,
//   e1: "welcome",
// };
// // [ ['a1', 'test'], ['b1', 4] ];
// // for (const [key, value] of Object.entries(obj)) {
// //   if (typeof value == "number") {
// //     console.log(`${key}: ${value}`);
// //   }
// // }

// let arr = Object.entries(obj);
// console.log(arr);
// // if(arr[1]==Number) {console.log(arr[1]);}
// arr.filter((item) => {
//   if (typeof item[1] == "number") {
//     return console.log(item);
//   }
// });

//==========================================================================================================

// Object Task 2

// Combine the given objects

// const myObject1 = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }

// const myObject2 = {
//   type: 'car',
//   year: 2021,
//   color: 'yellow'
// }
//------------------------------------------------------
// const myObject1 = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }

// const myObject2 = {
//   type: 'car',
//   year: 2021,
//   color: 'yellow'
// }

// console.log({...myObject1,...myObject2});

//========================================================================================

// Object Task 3

// Finding the country object where countryCode is 994

// const demoData = {
//   data: [
//     {
//       period: "Month",
//       subRows: [
//         {
//           country: "Albania",
//           measures: {
//             countryCode: "67",
//           },
//         },
//         {
//           country: "Azerbaijan",
//           measures: {
//             countryCode: "994",
//           },
//         },
//       ],
//     },
//   ],
// };
//--------------------------------------------------------------
const demoData = {
  data: [
    {
      period: "Month",
      subRows: [
        {
          country: "Albania",
          measures: {
            countryCode: "67",
          },
        },
        {
          country: "Azerbaijan",
          measures: {
            countryCode: "994",
          },
        },
      ],
    },
  ],
};

// let country=demoData.data[0].subRows.find(obj=>obj.measures.countryCode=="994") 
// console.log(country);

//===============================================================================================================================================

// Object Task 4

// Add driverName property to car details object not car object. Example: => [driverName: "Tomas"]

//  const car = {
//     model:"BMW",
//     details: {
//        year: 2015
//     }
//  };
//-------------------------------------------------------------------------

//  const car = {
//     model:"BMW",
//     details: {
//        year: 2015
//     }
//  };
//  console.log({...car,driverName:"Tomas"});

//===============================================================================================================================================

// Object Task 5

//  Remove year property from car object

//  const car = {
//     type:"Fiat",
//     model:"500",
//     color:"white",
//     details: {
//        year: 2015
//     }
//  };
//-----------------------------------------------------------------------
//  const car = {
//     type:"Fiat",
//     model:"500",
//     color:"white",
//     details: {
//        year: 2015
//     }
//  };
//  delete car.details.year;
//  console.log({...car});

//=====================================================================================================================================
// String Task 1

// Capitalize the first letter of the given sentence and replace all lorem words with “graphic”

// const string = "Lorem ipsum is a placeholder text commonly used to lorem demonstrate the visual form of a document or a typeface without relying on meaningful lorem content."
//---------------------------------------------------------------------------------------
//  const string = "Lorem ipsum is a placeholder text commonly used to lorem demonstrate the visual form of a document or a typeface without relying on meaningful lorem content."

//  let result=string.toLowerCase().replace(/lorem/g,"graphic");
//  console.log(result);
//  let capitalizeFirstLetter=result.charAt(0).toUpperCase() + result.slice(1);
//  console.log(capitalizeFirstLetter);

//===================================================================================================================================

// String Task 2

// Capitalize the first letter of the words in the given sentence

// const string = "can be used to perform case-insensitive more global searches"
//----------------------------------------------------------------------------
// const string = "can be used to perform case-insensitive more global searches"
// const words=string.split(" ");
// console.log(words);
// let str=words.map(word=>(word[0].toUpperCase()+word.substring(1))).join(" ");
// console.log(str);

//===================================================================================================================================

// String Task 3

// Combine the given strings

// let text1 = "When used on strings";
// let text2 = "the + operator is called the concatenation operator";
// let text3 = "+"

// Result must be:
// When used on strings, the "+" operator is called the concatenation operator.
//-------------------------------------------------------------
// let text1 = "When used on strings";
// let text2 = "the + operator is called the concatenation operator";
// let text3 = "+"
// console.log(text1,',',text2);

// =================================================================================================================

// String Task 4

// Combine the given values

// let text1 = 89;
// let text2 = "The temperature is";
// let text3 = "Celsius"

// Result must be:
// The temperature is 89 Celsius
//------------------------------------------------------
// let text1 = 89;
// let text2 = "The temperature is";
// let text3 = "Celsius"
// console.log(text2,text1,text3);

//===================================================================================================================

// String Task 5

// Create a function that takes in a string and returns the string with all vowels removed.

// function removeVowels(str) {
//   // write code...
// }

// console.log(removeVowels("Hello World")); // Output: "Hll Wrld"
//---------------------------------------------------------------------
// function removeVowels( str ){
//   return str.replace(/[aeiou]/gi, "");
// }
// console.log(removeVowels("Hello World"));

//=====================================================================================================================

// String Task 6

// Create a function that takes in an array of strings and returns a new array with all strings capitalized.

// function capitalizeStrings(arr) {
//   // write code...
// }

// console.log(capitalizeStrings(["hello", "world"])); // Output: ["HELLO", "WORLD"]
//------------------------------------------------------------------------------
// function capitalizeStrings(arr){
//   let str=arr.join(' ');
//   return (str.toUpperCase()).split(' ');

// }
// console.log(capitalizeStrings(["hello","world"]));

//======================================================================================================================

// String Task 7

// Create a function that takes in a string and returns the length of the longest word in the string.

// function longestWordLength(str) {
//   // write code...
// }

// console.log(longestWordLength("The quick brown fox")); // Output: 5
//------------------------------------------------------------------
// function longestWordLength(str) {
//   let strsplit = str.split(" ");
//   let longestWord = 0;
//   for (i = 0; i < strsplit.length; i++) {
//     if (strsplit[i].length > longestWord) {
//       longestWord = strsplit[i].length;
//     }
//   }
//   return longestWord;
// }
// console.log(longestWordLength("The quick brown fox"));

//========================================================================================================
// String Task 8

// Create a function that takes in a string and returns the reverse of the string.

// function reverseString(str) {
//   // write code...
// }

// console.log(reverseString("Hello World")); // Output: "dlroW olleH"
//----------------------------------------------------------------------

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello World"));
