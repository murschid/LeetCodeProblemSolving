/** 287. Find the Duplicate Number
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
	// let size = nums.length;
	// for (let i = 0; i < size; i++) {
	// 	if (nums.includes(nums[i], i + 1)) {
	// 		return nums[i];
	// 	}
	// }

	let slow = 0;
	let fast = 0;
	let check = 0;
	while (true) {
		slow = nums[slow]; // 1
		fast = nums[nums[fast]]; // 3
		if (slow == fast) {
			break;
		}
	}
	while (true) {
		slow = nums[slow];
		check = nums[check];
		if (slow == check) {
			break;
		}
	}
	return check;
};
// console.log(findDuplicate([1, 3, 4, 2, 2]));

/** 22. Generate Parentheses
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
	const output = [];
	const dfs = (str, open, close) => {
		if (open > close) return;
		if (open === 0 && close === 0) {
			output.push(str);
			return;
		}
		if (open > 0) dfs(`${str}(`, open - 1, close);
		if (close > 0) dfs(`${str})`, open, close - 1);
	};
	dfs("", n, n);
	return output;
};
// console.log(generateParenthesis(3));

/** 238. Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
	const output = [];
	// const size = nums.length;
	// for (let i = 0; i < size; i++) {
	// 	let temp = 1;
	// 	for (let j = 0; j < size; j++) {
	// 		if (i === j) continue;
	// 		temp *= nums[j];
	// 	}
	// 	output.push(temp);
	// }

	nums.reduceRight((acc, cur, i) => {
		output[i] = acc;
		return acc * cur;
	}, 1);
	nums.reduce((acc, cur, i) => {
		output[i] *= acc;
		return acc * cur;
	}, 1);
	return output;
};
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));

/** 48. Rotate Image
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i; j < matrix[0].length; j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	for (let k = 0; k < matrix.length; k++) {
		let first = matrix.shift();
		matrix.push(first.reverse());
	}
	return matrix;
};
// console.log(
// 	rotate([
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9],
// 	])
// );

/**	200. Number of Islands
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
	let result = 0;
	for (let row in grid) {
		for (let col in grid[row]) {
			if (grid[row][col] === "1") result++;
			checkIsland(parseInt(row), parseInt(col), grid);
		}
	}
	return result;
};

const checkIsland = (row, col, grid) => {
	if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === "0") return;
	grid[row][col] = "0";
	checkIsland(row + 1, col, grid);
	checkIsland(row - 1, col, grid);
	checkIsland(row, col + 1, grid);
	checkIsland(row, col - 1, grid);
};

// console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]));

/**	442. Find All Duplicates in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
	const result = [];
	const cache = {};
	nums.map((item) => {
		if (!(item in cache)) {
			cache[item] = 1;
		} else cache[item] += 1;
	});
	for (const i in cache) {
		if (cache[i] > 1) result.push(i);
	}
	return result;
};
// console.log(findDuplicates([13, 8, 5, 3, 20, 12, 3, 20, 5, 16, 9, 19, 12, 11, 13, 19, 11, 1, 10, 2]));

/**	7. Reverse Integer
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
	let input = +String(Math.abs(x)).split("").reverse().join("");
	if (input > 0x7fffffff) return 0;
	return x < 0 ? -input : input;
};
// console.log(reverse(123));

/** 17. Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	// TODO
	const data = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	};
	const res = [];
	for (let i of digits) {
		for (let j = 0; j < data[i].length; j++) {}
	}
};
// letterCombinations("23");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
	let result = -1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) result = i;
	}
	return result;
};
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	let temp = n.toString(2).split("");
	while (temp.length !== 32) temp.unshift("0");
	return parseInt(temp.reverse().join(""), 2);
};
// console.log(reverseBits(43261596));
