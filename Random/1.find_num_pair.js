// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

function sockMerchant(ar) {
  let map = {};
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    const currEl = ar[i];
    map[currEl] = (map[currEl] || 0) + 1;
  }
  Object.values(map).forEach((color) => {
    if (color % 2 === 0) result += color / 2;
    else result += Math.floor(color / 2);
  });
  return result;
}
