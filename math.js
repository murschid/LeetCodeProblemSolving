/** 2469. Convert the Temperature
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = function (celsius) {
	const kelvin = celsius + 273.15;
	const fahrenheit = celsius * 1.8 + 32.0;
	return [kelvin.toFixed(5), fahrenheit.toFixed(5)];
};
// console.log(convertTemperature(36.50));

/** 2235. Add Two Integers
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const sum = function (num1, num2) {
	return num1 + num2;
};
// console.log(sum(5, 10));

/** 2160. Minimum Sum of Four Digit Number After Splitting Digits
 * @param {number} num
 * @return {number}
 */
const minimumSum = function (num) {
	const input = num.toString().split("").sort();
	const first = [input[0] + input[2]];
	const second = [input[1] + input[3]];
	return parseInt(first) + parseInt(second);
};
// console.log(minimumSum(4009));

/** 1342. Number of Steps to Reduce a Number to Zero
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {
	let steps = 0;
	while (num !== 0) {
		if (num % 2 === 0) {
			num = num / 2;
			steps += 1;
		} else {
			num = num - 1;
			steps += 1;
		}
	}
	return steps;
};
// console.log(numberOfSteps(14));

/** 2535. Difference Between Element Sum and Digit Sum of an Array
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
	let sum1 = 0;
	let sum2 = 0;
	let sNums = "";
	nums.forEach((value) => {
		sum1 += value;
		sNums += value;
	});
	sNums.split("").forEach((value) => {
		sum2 += parseInt(value);
	});
	return sum1 - sum2;
};
// console.log(differenceOfSum([1,2,3,4]));

/** 2520. Count the Digits That Divide a Number
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
	let counter = 0;
	num.toString()
		.split("")
		.forEach((value) => {
			if (num % parseInt(value) === 0) {
				counter += 1;
			}
		});
	return counter;
};
// console.log(countDigits(121));

/** 1486. XOR Operation in an Array
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function (n, start) {
	let res = 0;
	for (let i = 0; i < n; i++) {
		res ^= start + 2 * i;
	}
	return res;
};
// console.log(xorOperation(4, 3));

/** 1688. Count of Matches in Tournament
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function (n) {
	let sum = 0;
	while (n !== 1) {
		sum += Math.floor(n / 2);
		n = Math.ceil(n / 2);
	}
	return sum;
};
// console.log(numberOfMatches(14));

/** 1290. Convert Binary Number in a Linked List to Integer
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function (head) {
	let binary = "";
	while (head !== null) {
		binary += head.val;
		head = head.next;
	}
	return parseInt(binary, 2);
};
// console.log(getDecimalValue([1,0,1]));

/** 1323. Maximum 69 Number
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
	let temp = [];
	let count = true;
	num.toString()
		.split("")
		.map((value) => {
			if (value === "6" && count) {
				temp.push("9");
				count = false;
			} else {
				temp.push(value);
			}
		});
	return parseInt(temp.join(""));
};
// console.log((maximum69Number(9669)));

/** 2413. Smallest Even Multiple
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = function (n) {
	return n % 2 === 0 ? n : n * 2;
};
// console.log(smallestEvenMultiple(5));

/** 2485. Find the Pivot Integer
 * @param {number} n
 * @return {number}
 */
const pivotInteger = function (n) {
	let totalSum = 0,
		removedSum = 0;
	for (let i = 1; i <= n; i++) totalSum += i;
	for (let i = 1; i <= n; i++) {
		if (totalSum === removedSum + i) return i;
		totalSum -= i;
		removedSum += i;
	}
	return -1;
};
// console.log(pivotInteger(8));

/** 2427. Number of Common Factors
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const commonFactors = function (a, b) {
	const res = [1];
	const min = Math.min(a, b);
	for (let i = 2; i <= min; i++) {
		if (a % i === 0 && b % i === 0) {
			res.push(i);
		}
	}
	return res.length;
};
// console.log(commonFactors(12, 6));

/** 728. Self Dividing Numbers
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
	const res = [];
	for (let i = left; i <= right; i++) {
		let status = true;
		i.toString()
			.split("")
			.forEach((value) => {
				if (i % parseInt(value) !== 0) status = false;
			});
		if (status) res.push(i);
	}
	return res;
};
// console.log(selfDividingNumbers(47, 85));

/** 1837. Sum of Digits in Base K
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = function (n, k) {
	const res = n.toString(k);
	return res.split("").reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
};
// console.log(sumBase(34, 6));

/** 1304. Find N Unique Integers Sum up to Zero
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function (n) {
	const size = Math.floor(n / 2);
	const res = [];
	for (let i = -size; i <= size; i++) {
		if (n % 2 === 0 && i === 0) continue;
		res.push(i);
	}
	return res;
};
// console.log(sumZero(5));

/**	231. Power of Two
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
	if (n === 1) return true;
	if (n === 0) return false;
	while (n % 2 === 0) {
		n = n / 2;
		if (n === 1) return true;
	}
	return false;
};
// console.log(isPowerOfTwo(8));

/**	2652. Sum Multiples
 * @param {number} n
 * @return {number}
 */
const sumOfMultiples = function (n) {
	let sum = 0;
	for (let i = 3; i <= n; i++) {
		if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) sum += i;
	}
	return sum;
};
// console.log(sumOfMultiples(10));

/**	2656. Maximum Sum With Exactly K Elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximizeSum = function (nums, k) {
	nums.sort((a, b) => a - b);
	const size = nums.length - 1;
	let result = 0;
	while (k > 0) {
		let temp = nums.splice(size, 1);
		result += temp[0];
		nums.push(temp[0] + 1);
		k--;
	}
	return result;
};
// console.log(maximizeSum([1, 2, 3, 4, 5], 3));

/**	2651. Calculate Delayed Arrival Time
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
const findDelayedArrivalTime = function (arrivalTime, delayedTime) {
	return (arrivalTime + delayedTime) % 24;
};
// console.log(findDelayedArrivalTime(13, 11));

/**	2643. Row With Maximum Ones
 * @param {number[][]} mat
 * @return {number[]}
 */
const rowAndMaximumOnes = function (mat) {
	const arr = [];
	mat.map((value) => {
		let temp = value.reduce((acc, cur) => acc + cur, 0);
		arr.push(temp);
	});
	const max = Math.max(...arr);
	return [arr.indexOf(max), max];
};
// console.log(
// 	rowAndMaximumOnes([
// 		[0, 0],
// 		[1, 1],
// 		[0, 0],
// 	])
// );

/**	2437. Number of Valid Clock Times
 * @param {string} time
 * @return {number}
 */
const countTime = function (time) {
	let hours = 1;
	if (time[0] === "?" && time[1] === "?") {
		hours = 24;
	} else if (time[0] === "?") {
		hours = time[1] <= 3 ? 3 : 2;
	} else if (time[1] === "?") {
		hours = time[0] <= 1 ? 10 : 4;
	}

	let minutes = 1;
	if (time[3] === "?" && time[4] === "?") {
		minutes = 60;
	} else if (time[3] === "?") {
		minutes = 6;
	} else if (time[4] === "?") {
		minutes = 10;
	}
	return hours * minutes;
};
// console.log(countTime("??:??")); //1440

/**	2409. Count Days Spent Together
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
const countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
	//returning in milliseconds
	const aliceArrivalDate = new Date("2023-" + arriveAlice);
	const aliceLeavingDate = new Date("2023-" + leaveAlice);
	const bobArrivalDate = new Date("2023-" + arriveBob);
	const bobLeavingDate = new Date("2023-" + leaveBob);

	//who arrived later
	let arrivalMax = new Date(Math.max(aliceArrivalDate, bobArrivalDate));
	//who leaved first
	let leavingMin = new Date(Math.min(aliceLeavingDate, bobLeavingDate));

	if (arrivalMax > leavingMin) return 0;
	return Math.floor((leavingMin - arrivalMax) / (1000 * 60 * 60 * 24)) + 1;
};
// console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
