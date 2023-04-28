/*****************************************   Easy Problems   ******************************************/

/** 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
	let remainign;
	let length = nums.length;
	for (i = 0; i < length; i++) {
		remainign = target - nums[i];
		for (j = i + 1; j < length; j++) {
			if (remainign == nums[j]) return [i, j];
		}
	}
};
// console.log(twoSum([2,7,11,15], 9));

/** 13. Roman to Integer
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
	const values = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		if (values[s[i]] < values[s[i + 1]]) {
			result -= values[s[i]];
		} else {
			result += values[s[i]];
		}
	}
	return result;
};
// console.log(romanToInt("III"));

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
	let result = "";
	let prefix = strs[0];
	for (let i = 0; i < prefix.length; i++) {
		if (strs.some((str) => str[i] !== prefix[i])) {
			break;
		}
		result += prefix[i];
	}
	return result;
};
// console.log(longestCommonPrefix(["flower","flow","flight"]));

/** 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] == "(") {
			stack.push(")");
		} else if (s[i] == "{") {
			stack.push("}");
		} else if (s[i] == "[") {
			stack.push("]");
		} else if (stack.pop() !== s[i]) {
			return false;
		}
	}
	return stack.length === 0;
};
// console.log(isValid("()[]{}"));

/** 26. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
	nums.splice(0, nums.length, ...new Set(nums));
};

/** 28. Find the Index of the First Occurrence in a String
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
	let temp = "";
	const stackSize = haystack.length;
	const needleSize = needle.length;
	for (let i = 0; i < stackSize; i++) {
		for (let j = i; j < i + needleSize; j++) temp += haystack[j];
		if (temp === needle) return i;
		temp = "";
	}
	return -1;
};
// console.log(strStr("sadbutsad", "sad"));

/** 66. Plus One
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
	let result = "";
	digits.forEach((item) => {
		result += item;
	});
	let newRes = BigInt(result) + BigInt(1);
	let strRes = newRes.toString();
	let newResult = [];
	for (let i = 0; i < strRes.length; i++) {
		newResult.push(parseInt(strRes[i]));
	}
	return newResult;
};
// console.log(plusOne([1,2,3]));

/** 69. Sqrt(x)
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
	let sqrt = Math.sqrt(x);
	return Math.floor(sqrt);
};
// console.log(mySqrt(4));

/** 70. Climbing Stairs
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
	let one = 1,
		two = 1;
	for (let i = 0; i < n - 1; i++) {
		let temp = one;
		one = one + two;
		two = temp;
	}
	return one;
};
// console.log(climbStairs(50));

/** 88. Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
	nums1.splice(m, nums1.length - m);
	nums2.forEach((value) => nums1.push(value));
	nums1.sort((a, b) => a - b);
	console.log(nums1);
};
// merge([1,2,3,0,0,0], 3, [2,5,6], 3);

/** 94. Binary Tree Inorder Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
	let res = [];
	inorder(root);

	function inorder(root) {
		if (!root) return null;
		inorder(root.left);
		res.push(root.val);
		inorder(root.right);
	}
	return res;
};
// console.log(inorderTraversal([1,null,2,3]));

/** 104. Maximum Depth of Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
	if (root === null) return 0;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// console.log(maxDepth([3,9,20,null,null,15,7]));

/** 136. Single Number
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
	let res;
	nums.forEach((item) => {
		res = res ^ item;
	});
	return res;
};
// console.log(singleNumber([2,2,1]));

/** 191. Number of 1 Bits
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
	return n.toString(2).replaceAll("0", "").length;
};
// console.log(hammingWeight(00000000000000000000000000001011));

/** 202. Happy Number
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
	let input = n;
	let record = [];
	while (!record.includes(input)) {
		record.push(input);
		let numArr = input.toString();
		input = 0;
		for (let i = 0; i < numArr.length; i++) {
			input += Math.pow(numArr[i], 2);
		}
		if (input === 1) return true;
	}
	return false;
};

/** 217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
	return nums.length !== [...new Set(nums)].length;
};

/** 242. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
	const sSort = s.split("").sort().join("");
	const tSort = t.split("").sort().join("");
	if (sSort == tSort) {
		return true;
	} else {
		return false;
	}
};

/** 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	let pointer = 0;
	for (let i in nums) {
		if (nums[i] !== 0) {
			[nums[pointer], nums[i]] = [nums[i], nums[pointer]];
			pointer++;
		}
	}
};

/** 326. Power of Three
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
	let no = 1;
	if (n === 1) return true;
	while (no <= n) {
		no *= 3;
		if (no === n) return true;
	}
	return false;
};

/** 344. Reverse String
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
	return s.reverse();
};

/** 412. Fizz Buzz
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
	let result = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result.push("FizzBuzz");
		} else if (i % 3 === 0) {
			result.push("Fizz");
		} else if (i % 5 === 0) {
			result.push("Buzz");
		} else {
			result.push(i.toString());
		}
	}
	return result;
};

/** 387. First Unique Character in a String
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
	}
	return -1;
};
// console.log(firstUniqChar("loveleetcode"));

/** 268. Missing Number
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
	for (let i = 0; i <= nums.length; i++) {
		if (!nums.includes(i)) return i;
	}
};
// console.log((missingNumber([0,1])));

/** 118. Pascal's Triangle
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
	const res = [];
	for (let i = 0; i < numRows; i++) {
		res.push([i + 1]);
		for (let j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				res[i][j] = 1;
			} else {
				res[i][j] = res[i - 1][j - 1] + res[i - 1][j]; // need to think and solve the equation
			}
		}
	}
	return res;
};
// console.log(generate(5));

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
	for (let i = 0; i < digits.length; i++) {
		for (let j = 0; j < data[digits[i]].length; j++) {
			console.log(data[digits[i]][j]);
		}
	}
};
// letterCombinations("23");

/** 171. Excel Sheet Column Number
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (s) {
	let total = 0;
	for (let i = 0; i < s.length; i++) {
		total = total * 26 + s.charCodeAt(i) - "A".charCodeAt(0) + 1;
	}
	return total;
};
// console.log(titleToNumber("ZY"));

/** 169. Majority Element
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
	let result = 0;
	let temp = 0;
	nums.forEach((value) => {
		if (temp === 0) {
			result = value;
			temp = 1;
		} else if (result === value) temp++;
		else temp--;
	});
	return result;
};
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 3]));

/** 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	if (prices == null || prices.length <= 1) return 0;
	const size = prices.length;
	let minBuy = prices[0];
	let profit = 0;
	for (let i = 1; i < size; i++) {
		minBuy = Math.min(minBuy, prices[i]);
		profit = Math.max(profit, prices[i] - minBuy);
	}
	return profit;
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/**	125. Valid Palindrome
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
	const replaced = s.replace(/[^a-z0-9]/gi, "").toLocaleLowerCase();
	if (replaced === replaced.split("").reverse().join("")) return true;
	return false;
};
// console.log(isPalindrome("A man, a plan, a canal: Panamas"));

/**	234. Palindrome Linked List
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindromeList = function (head) {
	let temp = [];
	let curr = head;
	while (curr) {
		temp.push(head.val);
		curr = head.next;
	}
	if (temp === temp.reverse()) return true;
	return false;
};
