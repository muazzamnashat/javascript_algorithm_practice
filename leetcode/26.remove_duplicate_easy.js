var removeDuplicates = function (nums) {
  let lastSeenNumIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    let lastSeenNum = nums[lastSeenNumIdx];
    let nextNum = nums[i];
    if (lastSeenNum !== nextNum) {
      lastSeenNumIdx++;
      nums[lastSeenNumIdx] = nums[i];
    }
  }
  return lastSeenNumIdx + 1;
};
