//*******************//
//*******************//
//*******************//
//*******************//
//*******************//
//*******************//
//*******************//
//*******************//
//*******************//
//*******************//
class C {
  _len: number = 0;
  get length() {
    return this._len;
  }

  set length(val: number) {
    this._len = val;
  }
}
let c: C = new C();
// c._len = 2;
c.length = 4;
console.log("c.lne", c._len);
// console.log("c.lne", c.);

//*******************//

// class Point {
//   //   x: number;
//   x!: number;
//   constructor() {
//     // this.x = 4;
//   }
// }

//*******************//

// // const tuple: readonly (number | string)[] = [2024, "Fahad"];
// let tuple: readonly (number | string)[] = [2024, "Fahad"];
// tuple = [2025, "Fahad"];
// console.log("tuple:", tuple);
//*******************//
// // let array1: number[] = [1, 2, 3, 4];
// // let array2: Array<number> = [1, 2, 3, 4];

// function delay(m: number): Promise<void> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       reject();
//     }, m);
//   });
// }

// delay(1000)
//   .then(() => console.log("This delay is over"))
//   .catch((error) => console.error("Something went wrong:", error))
//   .finally(() => console.log("This is always executed"));

//*******************//

// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// var c: Color = Color.Red;

// enum Color1 {
//   Red = 1,
//   Green,
//   Blue,
// }

// var colorName: string = Color1[2];
// console.log(colorName);

// enum Color2 {
//   Red = 1,
//   Green = 2,
//   Blue = 4,
// }

// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

//*******************//
// const img: HTMLImageElement = document.createElement("img");
// console.log(Math.floor(1.2));
//*******************//
// // type Student = { name: string; roll: number };
// type Student = { name: string; roll: number; greet(msg: string): void };
// // const student: Student = { name: "Fahad", roll: 45843 };
// const student: Student = {
//   name: "Fahad",
//   roll: 45843,
//   greet(n) {
//     console.log("n::", n);
//   },
// }; //greet don't work
// // type Student = { name: string; roll: number };
// console.log("student::", student);
// interface Teacher {
//   name: string;
//   salary: number;
// }
// // const teacher: Teacher = { name: "Gohar", salary: 700, age: 50 };
// const teacher: Teacher = {
//   name: "Gohar",
//   salary: 700,
//   age: 50,
//   greet(n) {
//     console.log("n:", n);
//   },
// };
// console.log("teacher:", teacher);
// interface Teacher {
//   age: number;
//   greet(msg: string): void;
// }

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
