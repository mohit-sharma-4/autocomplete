export const countWordOccurances = (str, word) => {
  let count = 0;

  const strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    if (word === strArray[i]) count++;
  }

  return count;
};

export const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
