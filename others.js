/**
 * @param {number} n
 * @returns {boolean}
 */
const isPrime = function (n) {
	let res = true;
	for (let i = 2; i < n; i++) {
		if (n % i === 0) res = false;
	}
	return res;
};
// console.log(isPrime(18));

/** 27. Remove Element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	return nums.filter((item) => item !== val);
};
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
