const createSquare = (n) => (n * n);

const addMemoize = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache " + n);
      return cache[n];
    }
    else {
      console.log("Calculating result " + n);
      let result = n * n;
      cache[n] = result;
      return result;
    }
  }
}

const square = addMemoize();

console.time();
console.log(square(11));
console.log(square(10));
console.log(square(10));
console.timeEnd();
