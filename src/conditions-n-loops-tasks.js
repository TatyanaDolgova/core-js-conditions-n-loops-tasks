/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x - queen.y === king.x - king.y ||
    queen.x + queen.y === king.x + king.y
  ) {
    return true;
  }

  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const tens = Math.floor(num / 10);
  const units = num % 10;
  let result = '';
  for (let i = 0; i < tens; i += 1) {
    result += 'X';
  }

  if (units < 4) {
    for (let i = 0; i < units; i += 1) {
      result += 'I';
    }
  } else if (units === 4) {
    result += 'IV';
  } else if (units === 5) {
    result += 'V';
  } else if (units > 5 && units < 9) {
    const remains = units - 5;
    result += 'V';
    for (let i = 0; i < remains; i += 1) {
      result += 'I';
    }
  } else if (units === 9) {
    result += 'IX';
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        result += 'minus';
        break;
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case ',':
        result += 'point';
        break;
      case '.':
        result += 'point';
        break;
      default:
        result += '';
    }
    if (i < numberStr.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = true;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      result = false;
    }
  }
  return result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;

  for (let i = num; i > 0; i = Math.trunc(i / 10)) {
    if (i % 10 === digit) {
      result = true;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let allSum = 0;
  let currentSum = 0;
  let result = -1;
  for (let i = 0; i < arr.length; i += 1) {
    allSum += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    currentSum += arr[i];

    if (allSum - currentSum - arr[i + 1] === currentSum) {
      result = i + 1;
      break;
    }
  }
  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let counter = 1;
  let top = 0;
  let right = size - 1;
  let bottom = size - 1;
  let left = 0;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = counter;
      counter += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = counter;
      counter += 1;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = counter;
      counter += 1;
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = counter;
      counter += 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const len = Math.floor(matrix.length / 2);
  const n = matrix.length;
  const copyMatrix = matrix;

  for (let i = 0; i < len; i += 1) {
    for (let j = i; j < n - 1 - i; j += 1) {
      const temp = copyMatrix[i][j];
      copyMatrix[i][j] = copyMatrix[n - 1 - j][i];
      copyMatrix[n - 1 - j][i] = copyMatrix[n - 1 - i][n - 1 - j];
      copyMatrix[n - 1 - i][n - 1 - j] = copyMatrix[j][n - 1 - i];
      copyMatrix[j][n - 1 - i] = temp;
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function quickSort(arr) {
  if (arr.length === 0) return [];
  const a = [];
  const b = [];
  const p = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < p) {
      a[a.length] = arr[i];
    } else {
      b[b.length] = arr[i];
    }
  }
  return [...quickSort(a), p, ...quickSort(b)];
}

function sortByAsc(array) {
  const result = quickSort(array);
  const temp = array;
  for (let i = 0; i < array.length; i += 1) {
    temp[i] = result[i];
  }
  return array;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let oldString = str;
  let string = '';

  let i = 0;

  while (string !== str) {
    let leftStr = '';
    let rightStr = '';

    for (let j = 0; j < oldString.length; j += 1) {
      if (j % 2 === 1) {
        rightStr += oldString[j];
      } else {
        leftStr += oldString[j];
      }
    }
    i += 1;
    string = leftStr + rightStr;
    oldString = string;
  }

  const newIterations = iterations % i;

  oldString = str;
  string = '';

  for (let k = 0; k < newIterations; k += 1) {
    let leftStr = '';
    let rightStr = '';

    for (let j = 0; j < oldString.length; j += 1) {
      if (j % 2 === 1) {
        rightStr += oldString[j];
      } else {
        leftStr += oldString[j];
      }
    }
    string = leftStr + rightStr;
    oldString = string;
  }

  return string;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function numberToDigitsArray(number) {
  const arr = [];
  let num = number;
  while (num > 0) {
    arr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return arr;
}

function getNearestBigger(number) {
  let arr = numberToDigitsArray(number).map(Number);
  for (let i = arr.length - 2; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      let n = null;
      let index;

      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[j] > arr[i]) {
          if (arr[j] < n || n === null) {
            n = arr[j];
            index = j;
          }
        }
      }
      const a = arr[i];
      arr[i] = n;
      arr[index] = a;

      const leftArray = [];
      const rightArray = [];

      for (let k = 0; k < i + 1; k += 1) {
        leftArray.push(arr[k]);
      }

      for (let k = i + 1; k < arr.length; k += 1) {
        rightArray.push(arr[k]);
      }

      rightArray.sort((c, b) => c - b);

      arr = [...leftArray, ...rightArray];
      break;
    }
  }

  return +arr.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
