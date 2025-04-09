function isPrime(n) {
    if (n < 2 )
        return '${n} is not prime number';
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return '${n} is not prime';
        }
    }
    return '${n} is prime number';
}

console.log(isPrime(117)); 
console.log(isPrime(113));
console.log(isPrime(97));