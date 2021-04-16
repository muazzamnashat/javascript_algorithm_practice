// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .
// Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.
// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

const shiftPos = (arr) => {
  const first = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) arr[arr.length - 1] = first;
    else arr[i] = arr[i + 1];
  }
};

function rotLeft(a, d) {
  for (let j = 1; j <= d; j++) {
    shiftPos(a);
  }
  return a;
}
