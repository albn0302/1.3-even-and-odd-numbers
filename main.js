function even_or_odd(a, b, c) {
    const results = [];
  
    const checkNumber = num => {
      if (num % 2 === 0) {
        return 'Even';
      } else {
        return 'Odd';
      }
    };
  
    results.push(checkNumber(a));
    results.push(checkNumber(b));
    results.push(checkNumber(c));
  
    return results;
  }
  
  console.log(even_or_odd(5, 6, 9));
  console.log(even_or_odd(86, 6, 4));
  