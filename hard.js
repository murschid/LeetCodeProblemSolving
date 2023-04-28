/** 239. Sliding Window Maximum
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
	const res = [];
	let temp = [];
	while (nums.length > 0) {
		temp = nums.slice(0, k);
		if (temp.length === k) res.push(Math.max(...temp));
		nums.splice(0, 1);
	}
	console.log(res);
};
// maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
