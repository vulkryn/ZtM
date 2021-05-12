const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
	let biggest = 0;
	arr.forEach(num => {
		if (num > biggest) {
			biggest = num;
		 }
	})
	return biggest;
}

function biggestNumberInArray2(arr) {
	let biggest = 0;
	for (num of arr) {
		if (num > biggest) {
			biggest = num;
		}
	}
	return biggest;
}

function biggestNumberInArray3(arr) {
	let biggest = 0;
	for (num in arr) {
		if (num > biggest) {
			biggest = num;
		}
	}
	return biggest;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

//with an object, we are not ITERATING.  We are ENUMERATING-- going through the properties
//for of will not work for objects because they are not iterable
function checkBasket(basket, lookingFor) {
	for (item in basket) {
		if (item === lookingFor) {
			return `${item} is in your basket!`;
		} 
	}
	return `Sorry, ${lookingFor} is not in your basket.`;
}