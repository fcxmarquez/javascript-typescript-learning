// Given a string, define if a sentence it's a pangram or not.

// A pangram is a sentence that contains all the letters of the English alphabet at least once, for example: "The quick brown fox jumps over the lazy dog".

const pangram = "The quick brown fox jumps over the lazy dog";

function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const sentenceToLowerCase = sentence.toLowerCase()
  const map = {};

  for (let i = 0; i < alphabet.length; i++) {
    map[alphabet[i]] = true;
  }

  for (let j = 0; j < sentence.length; j++) {
    const currentElement = sentence[j];

    if (map[currentElement]) {
      map[currentElement] = true;
    }
  }

  console.log(map);
}

isPangram(pangram);
