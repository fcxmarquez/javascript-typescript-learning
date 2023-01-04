// Given a string, define if a sentence it's a pangram or not.

// A pangram is a sentence that contains all the letters of the English alphabet at least once, for example: "The quick brown fox jumps over the lazy dog".

const pangram = "The quick brown fox jumps over the lazy dog";

function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const map = {};
  const object = {};
  const sentenceToLowerCase = sentence.toLowerCase();
  let status = false;

  for (let i = 0; i < alphabet.length; i++) {
    map[sentenceToLowerCase[i]] = true;
  }

  for (let j = 0; j < alphabet.length; j++) {
    const element = alphabet[j];
    if (map[element]) {
      object[element] = true;
    }
  }

  console.log(map, object);
}

isPangram(pangram);
