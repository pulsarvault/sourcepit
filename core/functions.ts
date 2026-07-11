// Rohit Chauhan: All Erasable types used. Just run .ts on Bun, Node or Deno
// Map Implementation
function map<T, U>(
  items: T[],
  transform: (item: T, index: number) => U): U[] {
  const result: U[] = []

  for (let index = 0; index < items.length; index++) {
    result.push(transform(items[index], index))
  }
  return result
}

//Map usage: Radashi style
const names = ["Rohit", "Samar", "Samir"]
const upperNames = map(names, (name) => name.toUpperCase())
console.log(upperNames)

// Filter Implementation
function filter<T>(
  items: T[],
  keepit: (item: T, index: number) => boolean): T[] {
  const result: T[] = []
  for (let index = 0; index < items.length; index++) {
    if (keepit(items[index], index))
      result.push(items[index])
  }
  return result
}

// Filter usage: Radashi style
const users = [
  { name: "Rohit", active: true },
  { name: "Samar", active: false },
  { name: "Samir", active: false },
];

const activeUsers = filter(users, user => user.active);

console.log(activeUsers);

/* Prototype: myFilter
Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} isn't a function!`);
  }

  const filteredArray = [];

  // this refers to array (use regular function above, arrow wont work, there is no this to an array)
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index])) filteredArray.push(this[index]);
  }

  return filteredArray;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersgreaterthanfive = numbers.myFilter((value) => value > 5);
console.log(numbersgreaterthanfive);
*/
