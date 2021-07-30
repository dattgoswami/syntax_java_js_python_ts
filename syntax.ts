let myVar: number = 3; // myVar has been explicitly typed as a number 

const squared = (num: number): number =>{
    return num * num;
};

let studentName:string;
studentName = 'Dae Lee'

let studentAge: number;
studentAge = 10;

let studentEnriched: boolean;
studentEnriched = true;

let studentPhone: (number | string);
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;

const getCapitals = (str:string):string[] | null => {
    const capitals = str.match(/[A-Z]/);
    return capitals;
  }
  
  console.log(getCapitals('something'));
  // returns null
  console.log(getCapitals('Something'));
  // returns ['S']

  /* 
  const myFunc = (student: string | undefined) => {
  if ( student === undefined ){
    // do something
  } 
};

const myFunc = (student: any): any => {
  // do something
};

const myFunc = (student: unknown): string => {
  // do something
}
  */

const myFunc100 = (student: string): void {
    console.log(student);
  };

const myError = (err: string): never {
    throw new Error(err); 
};

/* 
const myFunc99 = (student: unknown): string => {
    newStudent = student as string;
    return newStudent;
  }

//https://www.typescriptlang.org/docs/handbook/basic-types.html

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
 */

// let arr: string[]; // only accepts strings
// let arr2: (string | number)[]; // accepts strings or numbers
// let arr: [string, number, string]; // ['cat', 7, 'dog']

/*
enum Weekend {
  Friday,
  Saturday,
  Sunday
}
*/

/* 
let student:{ name: string, age: number, enrolled: boolean} = {name: 'Maria', age: 10, enrolled: true};

interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean
};
let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};

interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean,
  phone?: number // phone becomes optional
};

interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean,
  readonly id: number // id is readonly
};
*/

/* 
type Student = { 
  name: string; 
  age: number;
  enrolled: boolean;
};

let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};

class Student {
  studentGrade: number;
  studentId: number;
  constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
}

class Student {
  protected studentGrade: number;
  private studentId: number;
  public constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
  id(){
    return this.studentId;
  }
}

class Graduate extends Student {
  studentMajor: string; // public by default
  public constructor(grade: number, id: number, major: string ){
      super(grade, id);
      this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
      this.studentGrade = grade; // Accessable because parent is protected
      this.studentMajor = major;
  }
}

const myStudent = new Graduate(3, 1234, 'computer science');

console.log(myStudent.id()); //  prints 1234
myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myStudent.id()); // prints 1235

interface Student {
  name: string;
  age: number
  greet(): void;
}

const studentFactory = (name: string, age: number): Student =>{ 
  const greet = ():void => console.log('hello'); 
  return { name, age, greet };
}

const myStudent = studentFactory('Hana', 16);
*/

// Typed Function
const getItem1 = (arr: number[]):number => {
  return arr[1];
}
// Generic Function
const getItem = <T>(arr: T[]):T => {
  return arr[1];
};

getItem([1, 2, 3]); // Implicity typed as number 
getItem<number>([1,2,3]); // Explicitly typed as a number