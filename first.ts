const myNumber = 5;
const myName = 'Rajibul';
console.log('Hello From Typescript', myNumber, myName);


/* let money = 5000;
let honey = '';
let Koney = false;
money = 55; */


let money: number = 88;
let honey: string = 'O my sweet Heart honey dew dew pew pew';
let funny: boolean = true;

const age: number = 21;


function add(first: number, second: number): number {
  const result = first + second;
  return result;
}


const output: number = add(45, 87);

function doubleConsole(number: number): void {
  console.log(2 * number);

}


// multipurpose
/* function add(first: number | string, second: number | string): number | string {
  const result: string | number = first + second;
  return result;
}


const output: number = add(45, 87);
const fullName = add('Adam', 'Sand'); */




console.log(honey)











