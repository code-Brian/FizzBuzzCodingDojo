/* FizzBuzz Incoming */
console.log("page loaded...");

let number = 100;

console.log(`number is ${number}`);

for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log("FizzBuzz");
    }
    else if ( i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log ("loop over, thanks for playing!");