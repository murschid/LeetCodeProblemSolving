/** 771. Jewels and Stones
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
	let res = 0;
	let size = stones.length > jewels.length ? stones.length : jewels.length;
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (jewels[j] === stones[i]) {
				res += 1;
			}
		}
	}
	return res;
};
// console.log(numJewelsInStones("badc", "ccc"));

/** 709. To Lower Case
 * @param {string} s
 * @return {string}
 */
const toLowerCase = function (s) {
	return s.toLowerCase();
};
// console.log(toLowerCase("hello"));

/** 344. Reverse String
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
	return s.reverse();
};
// console.log(reverseString("hello"));

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
// console.log(fizzBuzz(15));

/** 2114. Maximum Number of Words Found in Sentences
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = function (sentences) {
	let res = 0;
	sentences.forEach((value) => {
		res = value.split(" ").length > res ? value.split(" ").length : res;
	});
	return res;
};
// console.log(mostWordsFound(["w jrpihe zsyqn l dxchifbxlasaehj","nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom"]));

/** 1678. Goal Parser Interpretation
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
	return command.split("()").join("o").split("(al)").join("al");
};
// console.log((interpret("(al)G(al)()()G")));

/** 1816. Truncate Sentence
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
	const input = s.split(" ");
	let res = "";
	for (let i = 0; i < k; i++) {
		res += input[i] + " ";
	}
	return res.trim();
};
// console.log((truncateSentence("Hello how are you Contestant", 4)));

/** 1528. Shuffle String
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
	let res = "";
	for (let i = 0; i < indices.length; i++) {
		res += s[indices.indexOf(i)];
	}
	return res;
};
// console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));

/** 1662. Check If Two String Arrays are Equivalent
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function (word1, word2) {
	let input1 = word1.join("");
	if (word1.join("") === word2.join("")) {
		return true;
	}
	return false;
};
// console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));

/** 1832. Check if the Sentence Is Pangram
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
	const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let res = true;
	const input = sentence.split("");
	alphabet.forEach((value) => {
		if (!input.includes(value)) {
			res = false;
		}
	});
	return res;
};
// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

/** 1773. Count Items Matching a Rule
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
	let res = 0;
	for (let i = 0; i < items.length; i++) {
		if (ruleKey === "type") {
			if (items[i][0] === ruleValue) {
				console.log(items[i][0]);
				res += 1;
			}
		} else if (ruleKey === "color") {
			if (items[i][1] === ruleValue) {
				res += 1;
			}
		} else {
			if (items[i][2] === ruleValue) {
				res += 1;
			}
		}
	}
	return res;
};
// console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"));

/** 2194. Cells in a Range on an Excel Sheet
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = function (s) {
	const res = [];
	const input = s.split(":");
	const start = input[0][0].charCodeAt();
	const end = input[1][0].charCodeAt();
	for (let i = start; i <= end; i++) {
		for (let j = input[0][1]; j <= input[1][1]; j++) {
			res.push(String.fromCharCode(i) + j);
		}
	}
	return res;
};
// console.log(cellsInRange("U7:X9"));

/** 2325. Decode the Message
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function (key, message) {
	const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let res = "";
	const map = new Map();
	const input = key.split(" ").join("");
	const set = new Set(input);
	for (let i = 0; i < set.size; i++) {
		map.set(Array.from(set)[i], alphabet[i]);
	}
	message.split("").forEach((value) => {
		if (value !== " ") {
			res += map.get(value);
		} else {
			res += " ";
		}
	});
	return res;
};
// console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));

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
// console.log(isAnagram("rat", "car"));

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
// console.log(romanToInt("LVIII"));

/** 415. Add Strings
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
	const newNum1 = BigInt(num1);
	const newNum2 = BigInt(num2);
	const result = newNum1 + newNum2;
	return result.toString();
};
// console.log(addStrings("11", "123"));

/** 67. Add Binary
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
	let x = BigInt(parseInt(a, 2));
	let y = BigInt(parseInt(b, 2));
	return (x + y).toString(2);
};
// console.log(addBinary("11", "1"));

/** 58. Length of Last Word
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
	let temp = s.trim().split(" ");
	let result = temp[temp.length - 1];
	return result.length;
};
// console.log(lengthOfLastWord("Hello World"));

/** 14. Longest Common Prefix
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

/** 434. Number of Segments in a String
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
	const sArr = s.split(" ");
	let sum = 0;
	sArr.filter((item) => {
		if (item !== "") {
			sum += 1;
		}
	});
	return sum;
};
// console.log(countSegments("Hello, my name is John"));

/** 2315. Count Asterisks
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function (s) {
	let res = 0;
	const input = s.split("|");
	input.forEach((value, index) => {
		if (isEven(index)) {
			value.split("").forEach((val) => {
				if (val === "*") {
					res += 1;
				}
			});
		}
	});
	function isEven(n) {
		return n % 2 === 0;
	}
	return res;
};
// console.log(countAsterisks("l|*e*et|c**o|*de|"));

/** 557. Reverse Words in a String III
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const input = s.split(" ");
	let res = "";
	input.forEach((value) => {
		res += value.split("").reverse().join("") + " ";
	});
	return res.trim();
};
// console.log(reverseWords("Let's take LeetCode contest"));

/** 2418. Sort the People
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = function (names, heights) {
	let map = new Map();
	names.forEach((value, index) => {
		map.set(heights[index], value);
	});
	let newMap = new Map([...map.entries()].sort((a, b) => b[0] - a[0]));
	return [...newMap.values()];
};
// console.log(sortPeople(["Mary","John","Emma"], [180,165,170]));

/** 1309. Decrypt String from Alphabet to Integer Mapping
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function (s) {
	let input = [];
	let text = s.split("");
	input.forEach((value) => {
		// console.log(String.fromCharCode(65 + parseInt(value)));
	});
};
// console.log(freqAlphabets("10#11#12"));
