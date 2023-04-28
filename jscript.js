/** 2635. Apply Transform Over Each Element in Array
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
	const newArr = [];
	arr.forEach((val, index) => {
		newArr.push(fn(val, index));
	});
	return newArr;
};

/** 2634. Filter Elements from Array
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
	const newArr = [];
	arr.forEach((item, index) => {
		if (fn(item, index)) {
			newArr.push(item);
		}
	});
	return newArr;
};

/** 2629. Function Composition
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
	return function (x) {
		return functions.reduceRight((acc, fn) => fn(acc), x);
	};
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/** 2618. Check if Object Instance of Class
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
	return Object(obj) instanceof classFunction ? true : false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

/** 2626. Array Reduce Transformation
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
	let result = init;
	nums.forEach((item) => {
		result = fn(result, item);
	});
	return result;
};

/** 1768. Merge Strings Alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
	const size1 = word1.length;
	const size2 = word2.length;
	const max = size1 >= size2 ? size1 : size2;
	let result = "";
	for (let i = 0; i < max; i++) {
		if (i < size1) result += word1[i];
		if (i < size2) result += word2[i];
	}
	return result;
};
// console.log(mergeAlternately("abc", "pqr"));
