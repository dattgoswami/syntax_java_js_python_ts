/*
numbers
strings
booleans
undefined values

binary arithmetic operators ==, !=, ===, !==, <,>,<=,>=
logic &&, ||
unary -,!typeof
ternary ?:
*/

console.log("hello \n 'how are you' ${100 / 2}");
//${} - template literal used to do some calculation in, which is then converted to string
let str = "cat" + "dog";
//string concatenation
console.log(str);

console.log(typeof str);
//returns string
console.log(NaN == NaN);
//false
console.log(true ? 1 : 2);

//type coercion
console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

//=== and !== to be used only when you do not want any type conversions to happen

console.log(null || "user"); //results in false
// → user
console.log("Agnes" || "user"); //results in true and returns value to the left
// → Agnes

//0, NaN, and the empty string ("") count as false,

let ten = 10; //use this
console.log(ten * ten);
// → 100
var name = "Ayda"; //pre 2015 js
const greeting = "Hello ";
console.log(greeting + name);
//expression that retrieves the log property from the value held by the console binding

/* keywords / reserved words
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
*/

//calculate 2^10
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);

/*
let yourName;
do {
   yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
*/
//break to exit the loop
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
//When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.
/*
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
        break;
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}
*/
let abc = "abc";
console.log(abc.length);
// → 3

const makeNoise = function () {
  console.log("Pling!");
};
makeNoise();
// → Pling!
// functions without a return statement return undefined

//var z is from pre 2015 js and scope of it is entire function where as for let y it is only the block in which it is defined
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
//if let square = function(x){  } then it can be changed and reassigned another value
const square = function (x) {
  return x * x;
};
console.log(square(12));
// → 144

function square1(x) {
  return x * x;
}
//below two fn are same
const square2 = (x) => {
  return x * x;
};
const square3 = (x) => x * x;

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));
// → 1024

const power1 = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
function powerDefault(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

const horn = () => {
  console.log("Toot");
};

function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10

function powerRecursive(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(powerRecursive(2, 3));
// → 8
//by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced.
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

//summarizing fn creation

// Define f to hold a function value
const f = function (a) {
  console.log(a + 2);
};
// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}
// A less verbose function value
let h = (a) => a % 3;

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

delete day1.squirrel;

console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// → ["x", "y", "z"]

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}

//array ofojects
let journal1 = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
  /* and so on... */
];

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

const score = { visitors: 0, home: 0 };
// This is okay
score.visitors = 1;
// This isn't allowed
//score = {visitors: 1, home: 1};
console.log(score);

let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
/*
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
};
console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function tableFor(event, journal) {
        let table = [0, 0, 0, 0];
        for (let i = 0; i < journal.length; i++) {
            let entry = journal[i], index = 0;
            if (entry.events.includes(event)) index += 1;
            if (entry.squirrel) index += 2;
            table[index] += 1;
        }
        return table;
};
console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

     for (let i = 0; i < JOURNAL.length; i++) {
            let entry = JOURNAL[i];
            // Do something with entry
        }
        for (let entry of JOURNAL) {
            console.log(`${entry.events.length} events.`);
        }
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
};
  
for (let entry of JOURNAL) {
        if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
            entry.events.push("peanut teeth");
        }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}
// → weekend: 0.1371988681
// → brushed teeth: -0.3805211953
for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1
*/

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

console.log("one two three".indexOf("ee"));
// → 11

console.log(" okay \n ".trim());
// → okay
console.log(String(6).padStart(3, "0"));
// → 006

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
//max(9, ...numbers, 2).

let words1 = ["never", "fully"];
console.log(["will", ...words1, "understand"]);
// → ["will", "never", "fully", "understand"]

//json
/*
{
"squirrel": false,
"events": ["work", "touched tree", "pizza", "running"]
}
JSON.stringify and JSON.parse
*/
let string1 = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(string1);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string1).events);
// → ["weekend"]

//count how many times a certain character occurs in a string
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

//create an array from given start end and step
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//reverse an array
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
//inplace reverse
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//array to list and list to array
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//deep comparison
function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);
// → 0
// → 1
// → 2

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

function unless(test, then) {
  if (test) then();
}
repeat(3, (n) => {
  unless(n % 2 == 0, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

["A", "B"].forEach((l) => console.log(l));
// → A
// → B
/*
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
console.log(filter(SCRIPTS, (script) => script.living));
// → [{name: "Adlam", …}, …]
console.log(SCRIPTS.filter((s) => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}
let rtlScripts = SCRIPTS.filter((s) => s.direction == "rtl");
console.log(map(rtlScripts, (s) => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);
// → {name: "Han", …}

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);
// → {name: "Han", …}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);
// → 1165
console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);
// → 204

let total = 0,
  count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));
// → 1165

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
console.log(characterScript(121));
// → {name: "Latin", …}

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

// → [{name: false, count: 2}, {name: true, count: 3}]
function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";
  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic

//flattening array
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]

//defining own loop
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//checking for a specific condition on all elements of array
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

*/
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
//map()
// What you have
var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
// What you need
[20, 24, 56, 88];

var officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});

var officersIds = officers.map(function (officer) {
  return officer.id;
});
//   const officersIds = officers.map(officer => officer.id);

//reduce()
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

var totalYears = pilots.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);
//const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
//filter()
var pilots1 = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

var rebels = pilots1.filter(function (pilot) {
  return pilot.faction === "Rebels";
});
var empire = pilots1.filter(function (pilot) {
  return pilot.faction === "Empire";
});

// const rebels = pilots1.filter(pilot => pilot.faction === "Rebels");
// const empire = pilots1.filter(pilot => pilot.faction === "Empire");

//all three together

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});
// Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)

var jediScores = jediPersonnel.map(function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
});
// Result: [154, 110, 156]
var totalJediScore = jediScores.reduce(function (acc, score) {
  return acc + score;
}, 0);
// Result: 420
/*
  var totalJediScore = personnel
  .filter(function (person) {
    return person.isForceUser;
  })
  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);

  */
/*
 const totalJediScore = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

  */
let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
// late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });
// → [0, 0.4, 0.6]

let empty = {};
console.log(empty.toString);
// → function toString()…{}
console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true

//pre 2015 methodology
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
//similar to line 1050 hungry rabbit
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
//constructor function
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
//this is same as the function above it also returns a rabbit object at the end
//names of the constructor needs to be capitalized
function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// → true
//newer way of creating class after 2015 use this
class Rabbit1 {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit1 = new Rabbit1("killer");
let blackRabbit = new Rabbit1("black");

let object = new (class {
  getWord() {
    return "hello";
  }
})();
console.log(object.getWord());
// → hello

Rabbit.prototype.teeth = "small";
console.log(killerRabbit1.teeth);
// → small
killerRabbit1.teeth = "long, sharp, and bloody";
console.log(killerRabbit1.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

console.log(Array.prototype.toString == Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2

console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]

//do not use this
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};
console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
//as all the js objects are dervied from Object.prototype
console.log("toString" in Object.create(null));
// → false

//this should be used to create Map()
//methods set get and has come along with it
let ages1 = new Map();
ages1.set("Boris", 39);
ages1.set("Liang", 22);
ages1.set("Júlia", 62);
console.log(`Júlia is ${ages1.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages1.has("Jack"));
// → Is Jack's age known? false
console.log(ages1.has("toString"));
// → false

console.log({ x: 1 }.hasOwnProperty("x"));
// → true
console.log({ x: 1 }.hasOwnProperty("toString"));
// → false
//polymorphism
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));
// → a black rabbit
//symbols
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn
let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  },
};
console.log(stringObject[toStringSymbol]());
// → a jute rope

//iterator interface
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) return { done: true };
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}
Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}
// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};
console.log(varyingSize.size);
// → 73
console.log(varyingSize.size);
// → 49
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }
  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}
let matrix1 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix1.get(2, 3));
// → 3,2
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false
console.log([1] instanceof Array);
// → true

//creating set in which an object can occur only once
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((v) => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));

//ch 7 robot project

//throw new Error("Invalid direction: " + result);

/*
try {
console.log("You see", look());
} catch (error) {
console.log("Something went wrong: " + error);
}
  */

setTimeout(() => console.log("Tick"), 500);

let fifteen = Promise.resolve(15);
fifteen.then((value) => console.log(`Got ${value}`));
// → Got 15

/*

const {request} = require("http");
let requestStream = request({
hostname: "eloquentjavascript.net",
path: "/20_node.html",
method: "GET",
headers: {Accept: "text/html"}
}, response => {
console.log("Server responded with status code",
response.statusCode);
});
requestStream.end();

*/

/*
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};


// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");



*/
let array = [1, 2, 3, 4, 5, 6];
array.splice(-2, 0, 20, 25);
console.log(array);

/*
//https://web.dev/javascript-this/
const arrowFunction = () => {
  console.log(this);
};

const outerThis = this;

const arrowFunction = () => {
  // Always logs `true`:
  console.log(this === outerThis);
};

*/

//map, find, filter

const users = [
  { name: "John", age: 35 },
  { name: "Peter", age: 45 },
  { name: "Roger", age: 25 },
  { name: "Dantes", age: 55 },
  { name: "Albert", age: 38 },
  { name: "Nicholas", age: 18 },
];

users.forEach((u) => console.log(u.name));

const userNames = users.map((e) => e.name);
const userAge = users.map((e) => e.age);
console.log(userNames);

//find returns only a single value
console.log(users.find((e) => e.name === "Roger"));
//filter returns multiple values
console.log(users.filter((e) => e.name.length > 5));
//sync async

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function isPrimeAsync(number, callback) {
  setTimeout(() => callback(isPrime(number)), 0);
  console.log("letting the executed function know when we are done");
}

//isPrimeAsync(413158523, console.log);

function test() {
  console.log("first test");
  isPrime(413158523);
  console.log("second test");
  isPrime(413158523);
  console.log("third test");
  isPrime(413158523);
  console.log("final test");
}
/*
function testAsync(){
  console.log('first test');
  isPrimeAsync(413158523, callback);
  console.log('second test');
  isPrimeAsync(413158523, callback);
  console.log('third test');
  isPrimeAsync(413158523, callback);
  console.log('final test');
}
*/
test();
//testAsync();

//promises
/*
function isPrimePromise(number){
  return new Promise( (resolve,reject) =>{
      if(number > 9000000){
        reject({'error': 'number too large'});
      }else{
        resolve(isPrime(number));
      }
    }
  );
};
*/

function isPrimePromise(number) {
  return new Promise((resolve, reject) => {
    if (number > 9000000) {
      reject({ error: "number too large" });
    } else {
      setTimeout(() => resolve(isPrime(number)), 0);
    }
  });
}

isPrimePromise(413158523)
  .then((r) => console.log(r))
  .catch((e) => console.log("something wrong " + JSON.stringify(e)));

console.log("test promise output------");

function testPromise() {
  console.log("first test");
  isPrimePromise(81).then(console.log).catch(console.error);
  console.log("second test");
  isPrimePromise(81).then(console.log).catch(console.error);
  console.log("third test");
  isPrimePromise(5).then(console.log).catch(console.error);
  console.log("final ");
}
console.log("test promise");
testPromise();

console.log("async / await");

async function testAsync() {
  console.log("first test");
  const r1 = await isPrimePromise(81);
  console.log(r1);
  console.log("second test");
  const r2 = await isPrimePromise(81);
  console.log(r2);
  console.log("third test");
  const r3 = await isPrimePromise(81);
  console.log(r3);
  console.log("final ");
}

testAsync();

//fetch('https://api.github.com');

const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

const gemstone = {
  type: "quartz",
  color: "rose",
  carat: 21.29,
};

const { type, color, carat } = gemstone;

console.log(type, color, carat);

//let { color } = gemstone;

/*
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}

for (const index in digits) {
  console.log(digits[index]);
}
Array.prototype.decimalfy = function () {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};
for (const digit of digits) {
  console.log(digit);
}
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// your code goes here
for (const day of days) {
  var Day = day.charAt(0).toUpperCase() + day.slice(1);
  console.log(Day);
}

const books = [
  "Don Quixote",
  "The Hobbit",
  "Alice in Wonderland",
  "Tale of Two Cities",
];
console.log(...books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
// const produce = fruits.concat(vegetables);
// console.log(produce);

const produce = [...fruits, ...vegetables];
console.log(produce);

const order = [20.17, 18.67, 1.5, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

const myPackage = ["cheese", "eggs", "milk", "bread"];
console.log(...myPackage);
printPackageContents(myPackage);
function printPackageContents(...items) {
  for (const item of items) {
    console.log(item);
  }
}

function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

/*
document.getElementById('id');
document.getElementsByClassName('someclass');
document.getElementsByTagName('sometag');

find and return the element with an ID of "header"
document.querySelector('#header');

find and return the first element with the class "header"
document.querySelector('.header');

find and return the first <header> element
document.querySelector('header');

find and return a list of elements with the class "header"
document.querySelectorAll('.header');

find and return a list of <header> elements
document.querySelectorAll('header');

const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}
*/
