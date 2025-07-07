export function wordsToNumberLogic(text) {
  const small = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
    eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
    sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
    twenty: 20, thirty: 30, forty: 40, fifty: 50,
    sixty: 60, seventy: 70, eighty: 80, ninety: 90
  };

  const magnitudes = {
    hundred: 100,
    thousand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18
  };

  const tokens = text.toLowerCase().replace(/ and /g, ' ').match(/\w+/g) || [];

  let total = 0;
  let currentGroup = 0;
  let temp = 0;

  for (let word of tokens) {
    if (small[word] !== undefined) {
      temp += small[word];
    } else if (word === "hundred") {
      if (temp === 0) temp = 1;
      temp *= 100;
    } else if (magnitudes[word]) {
      if (magnitudes[word] < 1000) {
        temp *= magnitudes[word]; // 'hundred'
      } else {
        currentGroup += temp;
        total += currentGroup * magnitudes[word];
        currentGroup = 0;
        temp = 0;
      }
    }
  }

  // 👇 Flush leftover group and temp
  total += currentGroup + temp;

  return total;
}
