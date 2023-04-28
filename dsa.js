/** 704. Binary Search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
	let result = -1;
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		let middle = Math.floor((start + end) / 2);
		if (nums[middle] === target) {
			result = middle;
			break;
		}
		target < nums[middle] ? (end = middle - 1) : (start = middle + 1);
	}
	return result;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
