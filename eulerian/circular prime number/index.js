function allPrimes(limit) {
    const isPrime = new Array(limit).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let start = 2; start * start <= limit; start++) {
        if (isPrime[start]) {
            for (let multiple = start * start; multiple < limit; multiple += start) {
                isPrime[multiple] = false;
            }
        }
    }

    const primes = [];
    for (let num = 2; num < limit; num++) {
        if (isPrime[num]) {
            primes.push(num);
        }
    }
    return primes;
}

function rotateNumber(n) {
    const s = n.toString();
    const rotations = [];
    for (let i = 0; i < s.length; i++) {
        rotations.push(parseInt(s.slice(i) + s.slice(0, i), 10));
    }
    return rotations;
}

function isCircularPrime(prime, primeSet) {
    return rotateNumber(prime).every(rotation => primeSet.has(rotation));
}

function countCircularPrimes(limit) {
    const primes = allPrimes(limit);
    const primeSet = new Set(primes);
    let circularPrimeCount = 0;
    const circularPrime = []

    for (const prime of primes) {
        if (isCircularPrime(prime, primeSet)) {
            circularPrimeCount += 1;
            circularPrime.push(prime)
        }
    }

    return { count: circularPrimeCount, circularPrime: circularPrime };
}


const limit = 1000000;
const result = countCircularPrimes(limit);
console.log(result);
console.log(result.circularPrime);
