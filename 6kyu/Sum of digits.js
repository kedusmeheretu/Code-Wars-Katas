function digitalRoot(n) {
  let num = n;
  let sum = 0;
    while(num > 0){
      let rem = num % 10;
      sum = sum + rem;
      num = parseInt(num / 10)
    }

    return sum
}

console.log(digitalRoot(346))
console.log('test')