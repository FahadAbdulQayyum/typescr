// const student: Student = { name: "Fahad", roll: 45843 };
var student = {
    name: "Fahad",
    roll: 45843,
    greet: function (n) {
        console.log("n::", n);
    },
}; //greet don't work
// type Student = { name: string; roll: number };
console.log("student::", student);
// const teacher: Teacher = { name: "Gohar", salary: 700, age: 50 };
var teacher = {
    name: "Gohar",
    salary: 700,
    age: 50,
    greet: function (n) {
        console.log("n:", n);
    },
};
console.log("teacher:", teacher);
//*******************//
// enum Days {
//   Sunday,
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
// }
// const today: Days = Days.Saturday;
// // console.log(today); // 0
// console.log(Days[today]);
//*******************//
// console.log(Math.floor(11.9));
// let fhd: readonly [number, string, boolean] = [2020, "Year Of Admission", true];
// fhd = [2024, "Year of Graduation", false];
// console.log(fhd);
//*******************//
// function func(z: number) {
//   //   let cnfrm = confirm("Please");
//   let cnfrm = alert("Please");
//   console.log("cnfrm:", cnfrm);
// }
//*******************//
// function func(z: number) {
//   nextt: for (let i = 0; i < z; i++) {
//     // console.log("i:", i);
//     for (let j = 0; j < i; j++) {
//       //   console.log("nextt:", nextt);
//       //   if (i % j == 0) return nextt;
//       if (i % j == 0) break nextt;
//       //   if (i % j == 0) continue nextt;
//     }
//   }
// }
//*******************//
// function showPrimes(z: number) {
//   nextPrime: for (let i = 2; i < z; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     console.log(i);
//   }
// }
// showPrimes(5);
//*******************//
// function sum(a: number, b: number): number {
//   return a + b;
// }
// const add = sum(4, 6);
// console.log("add", add);
