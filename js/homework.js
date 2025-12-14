// перше завдання

function findMaxSubarraySum(arr) {
    let currentSum = 0;
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        currentSum += number;

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Максимальна сума:", findMaxSubarraySum(numbers));

// друге завдання
function sumLongStrings(str1, str2) {
    const num1 = BigInt(str1);
    const num2 = BigInt(str2);
    const sum = num1 + num2;
    return sum.toString();
}

const a = "999999999999999999";
const b = "1";
console.log(sumLongStrings(a, b));

// трете завдання

function rizz(arr1, arr2) {
    let result = arr1.slice();

    for (let i = 0; i < arr2.length; i++) {
        let numToRemove = arr2[i];

        let index = result.indexOf(numToRemove);

        if (index !== -1) {
            result.splice(index, 1);
        }
    }

    return result;
}


const arrayA = [1, 2, 2, 3, 4];
const arrayB = [2, 4];
console.log("Різниця масивів:", rizz(arrayA, arrayB));

