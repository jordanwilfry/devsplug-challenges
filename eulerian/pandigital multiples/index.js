// function isPandigital(number) {
//     const digits = new Set(number.toString().split(''));
//     return digits.size === 9 && ![...digits].some(d => d === '0' || d > '9' || d < '1');
// }

// function concatenatedProduct(number, n) {
//     let result = '';
//     for (let i = 1; i <= n; i++) {
//         result += (number * i).toString();
//     }
//     return result;
// }

// function findLargestPandigital() {
//     let largestPandigital = 0;
//     let initialNumber = 0;

//     for (let number = 1; number < 10000; number++) {
//         for (let n = 1; n < 10; n++) {
//             const product = concatenatedProduct(number, n);
//             if (product.length === 9 && isPandigital(product)) {
//                 largestPandigital = Math.max(largestPandigital, parseInt(product));
//                 initialNumber = number
//             }
//         }
//     }

//     return { largestPandigital, initialNumber };
// }

// console.log(findLargestPandigital());

const checkIfPandigital = (number) => {
    const digits = new Set(number.toString().split(''));
    return digits.size === 9 && ![...digits].some(d => +d === 0 || +d > 9 || +d < 1);
}

const concatenatedProduct = (number, n) => {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += (number * i).toString();
    }
    return result;
}

const findLargestPandigital= () => {
    let largestPandigital = 0;
    let initialNumber = 0;

    for (let number = 1; number < 10000; number++) {
        for (let n = 1; n < 10; n++) {
            const product = concatenatedProduct(number, n);
            if (product.length === 9 && checkIfPandigital(product)) {
                largestPandigital = Math.max(largestPandigital, parseInt(product));
                initialNumber = number
            }
        }
    }

    return { largestPandigital, initialNumber };
}

console.log(findLargestPandigital());
