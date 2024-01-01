//your JS code here. If required.
function mapLetters(word) {
  const letterMap = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const symbolLetter = Symbol(letter); // Convert to symbol for key

    letterMap[symbolLetter] = letterMap[symbolLetter] || []; // Initialize array if needed
    letterMap[symbolLetter].push(i); // Add index to array
  }

  return letterMap;
}

// Example usage:
const result = mapLetters("dodo");
console.log(result); // Output: { d: [0, 2], o: [1, 3] }
