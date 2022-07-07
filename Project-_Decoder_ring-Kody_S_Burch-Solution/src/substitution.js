// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {

    function mapChar(msg, alpha1, alpha2) {
      return msg.map((letter) => {
        const index = alpha1.indexOf(letter);
        if (index === -1) return letter;
        return alpha2[index];
      });
    }

    if (!alphabet || alphabet.length != 26) return false;

    const regularAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    const newAlpha = alphabet.toLowerCase().split("");
    const msg = input.toLowerCase().split("");

    for (let i = 0; i < newAlpha.length; i++) {
      for (let j = i + 1; j < newAlpha.length; j++) {
        if (newAlpha[i] === newAlpha[j]) return false;
      }
    }

    if (encode) return mapChar(msg, regularAlpha, newAlpha).join("");
    return mapChar(msg, newAlpha, regularAlpha).join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };