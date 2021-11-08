// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...numbers) {
  numbers.forEach((number) => {
    if (isPrime(number)) {
      console.log(number);
    }
  });
}

// Euler's prime logic
function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    // sqrtnum+1
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

findPrime(2, 5, 8, 21, 13);

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function friendNumbers(num1, num2) {
  console.log(divisors(num1) === divisors(num2));
}

let divisors = (n) =>
  [...Array(n + 1).keys()].slice(1).reduce((s, a) => {
    let divisor = !(n % a) && a;
    return s + divisor;
  }, 0);

friendNumbers(220, 284);

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumbers(number) {
  perfectNumbers = [];
  for (let i = 1; i < number + 1; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  console.log(perfectNumbers);
}

function isPerfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  if (sum == number) {
    return true;
  }
  return false;
}

perfectNumbers(1000);

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function primesNumbers(n) {
  let primesNumbers = [];
  for (let i = 2; i < n + 1; i++) {
    if (isPrime(i)) {
      primesNumbers.push(i);
    }
  }
  return primesNumbers;
}

console.log(primesNumbers(1000));
