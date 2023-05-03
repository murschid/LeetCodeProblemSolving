/** 1920. Build Array from Permutation
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function (nums) {
	let ans = [];
	nums.forEach((value, index) => {
		ans.push(nums[nums[index]]);
	});
	return ans;
};
// console.log(buildArray([0,2,1,5,3,4]));

/** 1929. Concatenation of Array
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function (nums) {
	return nums.concat(...nums);
};
// console.log(getConcatenation([1,3,2,1]));

/** 1470. Shuffle the Array
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
	let ans = [];
	for (let i = 0; i < n; i++) {
		ans.push(nums[i], nums[i + n]);
	}
	return ans;
};
// console.log(shuffle([1,2,3,4,4,3,2,1], 4));

/** 2011. Final Value of Variable After Performing Operations
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function (operations) {
	let x = 0;
	for (let i = 0; i < operations.length; i++) {
		if (operations[i] === "++X" || operations[i] === "X++") {
			x += 1;
		} else {
			x -= 1;
		}
	}
	return x;
};
// console.log(finalValueAfterOperations(["++X","++X","X++"]));

/** 2574. Left and Right Sum Differences
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRigthDifference = function (nums) {
	const size = nums.length;
	const leftSum = [0];
	const rightSum = [];
	const res = [];

	for (let i = 0; i < size - 1; i++) {
		leftSum.push(leftSum[i] + nums[i]);
	}
	let temp = 0;
	for (let j = size - 1; j > 0; j--) {
		rightSum.push((temp += nums[j]));
	}
	rightSum.reverse();
	rightSum.push(0);

	for (let k = 0; k < size; k++) {
		res.push(Math.abs(leftSum[k] - rightSum[k]));
	}
	return res;
};
// console.log(leftRigthDifference([10,4,8,3]));

/** 1512. Number of Good Pairs
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
	let ans = 0;
	const size = nums.length;

	for (let i = 0; i < size; i++) {
		for (let j = i + 1; j < size; j++) {
			if (nums[i] === nums[j]) {
				ans += 1;
			}
		}
	}
	return ans;
};
// console.log(numIdenticalPairs([1,1,1,1]));

/** 26. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
	nums.splice(0, nums.length, ...new Set(nums));
};
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

/** 1108. Defanging an IP Address
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
	return address.split(".").join("[.]");
};
// console.log(defangIPaddr("1.1.1.1"));

/** 448. Find All Numbers Disappeared in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
	let result = [];
	const max = nums.length;
	for (let i = 1; i <= max; i++) {
		if (!nums.includes(i)) result.push(i);
	}
	return result;
};
// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

/** 977. Squares of a Sorted Array
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
	const result = nums.map((item) => item * item);
	return result.sort((a, b) => a - b);
};
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

/** 844. Backspace String Compare
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
	return check(s) === check(t);
};

const check = (str) => {
	const temp = [];
	str.split("").forEach((item) => (item === "#" ? temp.pop() : temp.push(item)));
	return temp.join("");
};
// console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));

/**	35. Search Insert Position
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
	if (!nums.includes(target)) {
		nums.push(target);
		nums.sort((a, b) => a - b);
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) return i;
	}
};
// console.log(searchInsert([3, 5, 7, 9, 10], 8));

/**	338. Counting Bits
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
	const result = [];
	for (let i = 0; i <= n; i++) {
		const temp = i.toString(2).split("");
		result.push(temp.reduce((acc, cur) => acc + parseInt(cur), 0));
	}
	return result;
};
// console.log(countBits(5));

/**	345. Reverse Vowels of a String
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
	const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
	const input = s.split("");
	let start = 0;
	let end = input.length - 1;
	while (start < end) {
		if (vowels[input[start]] && vowels[input[end]]) {
			[input[start], input[end]] = [input[end], input[start]];
			start++;
			end--;
		} else if (vowels[input[start]]) {
			end--;
		} else start++;
	}
	return input.join("");
};
// console.log(reverseVowels("leetcode"));

/**	2595. Number of Even and Odd Bits
 * @param {number} n
 * @return {number[]}
 */
const evenOddBit = function (n) {
	const input = n.toString(2).split("").reverse();
	let even = 0;
	let odd = 0;
	input.map((value, index) => {
		if (value == 1) {
			if (index % 2 === 0) even++;
			else odd++;
		}
	});
	return [even, odd];
};
// console.log(evenOddBit(2));

/**	2529. Maximum Count of Positive Integer and Negative Integer
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = function (nums) {
	let positive = 0;
	let negative = 0;
	nums.forEach((value) => {
		if (value > 0) positive++;
		if (value < 0) negative++;
	});
	return Math.max(positive, negative);
};
// console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));

/**	2553. Separate the Digits in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
const separateDigits = function (nums) {
	const output = [];
	nums.forEach((value) => {
		output.push(...value.toString().split(""));
	});
	return output;
};
// console.log(separateDigits([13, 25, 83, 77]));

/**	2660. Determine the Winner of a Bowling Game
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
const isWinner = function (player1, player2) {
	let sum1 = calculate(player1);
	let sum2 = calculate(player2);
	return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : 2;
};

const calculate = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i - 1] === 10 || arr[i - 2] === 10) sum += 2 * arr[i];
		else sum += arr[i];
	}
	return sum;
};
// console.log(isWinner([5, 6, 1, 10], [5, 1, 10, 5]));

/**	628. Maximum Product of Three Numbers
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
	const input = nums.sort((a, b) => b - a);
	const size = nums.length;
	const output1 = input[0] * input[1] * input[2];
	const output2 = input[size - 1] * input[size - 2] * input[0];
	return Math.max(output1, output2);
};
// console.log(maximumProduct([1, 2, 3, 4]));

/**	1822. Sign of the Product of an Array
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
	let product = 1;
	for (let i = 0; i < nums.length; i++) product *= nums[i];
	return product > 0 ? 1 : product < 0 ? -1 : 0;
};
// console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));

/**	2441. Largest Positive Integer That Exists With Its Negative
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function (nums) {
	const res = [-1];
	nums.map((value) => {
		if (value > 0 && nums.includes(-value)) res.push(value);
	});
	return Math.max(...res);
};
// console.log(findMaxK([-1, 10, 6, 7, -7, 1]));

/**	2586. Count the Number of Vowel Strings in Range
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const vowelStrings = function (words, left, right) {
	const vowels = { a: "a", e: "e", i: "i", o: "o", u: "u" };
	let res = 0;
	for (let i = left; i <= right; i++) {
		if (words[i][0] in vowels && words[i][words[i].length - 1] in vowels) res++;
	}
	return res;
};
// console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));

/**
 * @return {Generator<number>}
 */
const fibGenerator = function* () {
	let [first, second] = [0, 1];
	while (true) {
		yield first;
		[first, second] = [second, first + second];
	}
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
