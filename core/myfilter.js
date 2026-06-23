// Samir: Creating your own filter() function
// Rohit Chauhan: Day 3

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
