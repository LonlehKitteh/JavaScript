const minimumLength = (s: string): number => {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    let tmp = s[left];
    while (left <= right && s[left] == tmp) {
      left += 1;
    }
    while (left <= right && s[right] == tmp) {
      right -= 1;
    }
  }

  return right - left + 1;
};
